import React, { useState, useContext, useRef } from "react";
import { CartContext } from "../../context/CartContext";
import { useSpring } from 'react-spring';
import {Button} from "../Button/Button";
import '../../tailwind.css';
import Swal from "sweetalert2";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import "firebase/firestore";
import { firebaseConfig } from "../../config/firebaseConfig";

// Inicializa la aplicación de Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Order = () => {
  // Contexto del carrito para obtener la cantidad total
  const { totalCartItems } = useContext(CartContext);

  // Estados para los datos del formulario
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [notes, setNotes] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [showCreditCard] = useState(true);

  // Refs para los campos de dirección, código postal y número de teléfono
  const addressRef = useRef(null);
  const postalCodeRef = useRef(null);
  const phoneNumberRef = useRef(null);

  // Animación para la tarjeta de crédito utilizando react-spring
  const cardAnimation = useSpring({
    from: { transform: "rotateY(-180deg)", opacity: 0 },
    to: { transform: "rotateY(0)", opacity: 1 },
    config: { tension: 150, friction: 12 },
    immediate: true,
  });

  // Formatear el total del carrito a dos decimales
  const formattedTotal = totalCartItems.toFixed(2);

  // Solo números y 16 dígitos para la tarjeta
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 16);
    value = value.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(value);
  };

  // Formato de la fecha y limitación a 4 dígitos
  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    } else {
      value = value.replace(/(\d{2})/, "$1/");
    }
    setExpiryDate(value);
  };

  // Solo números para el código de seg. y limitar a 3 dígitos
  const handleCvcChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 3);
    setCvc(value);
  };

  // Restringir a solo letras el nombre
  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setName(value);
  };

  // Solo números y limitar a 4 dígitos el código postal
  const handlePostalCodeChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 4);
    postalCodeRef.current.value = value;
  };

  // Solo números y limitar a 11 dígitos, número de teléfono
  const handlePhoneNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 11);
    phoneNumberRef.current.value = value;
  };

  // Email
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  // Confirmación de email
  const handleConfirmEmailChange = (e) => {
    const value = e.target.value;
    setConfirmEmail(value);
  };

  // Validar que todos los campos requeridos estén completos
  const validateFields = () => {
    const requiredFields = [
      name,
      cardNumber,
      expiryDate,
      cvc,
      selectedOption1,
      selectedOption2,
      selectedOption3,
      addressRef.current.value,
      postalCodeRef.current.value,
      phoneNumberRef.current.value,
      email,
      confirmEmail,
    ];

    const isValid = requiredFields.every((field) => field.trim() !== "");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    if (!isEmailValid) {
      Swal.fire({
        icon: "error",
        title: "Error de Email",
        text: "Por favor, ingrese un correo electrónico válido.",
      });
      return false;
    }

    // Validar que los emails coincidan
    if (isValid && email !== confirmEmail) {
      Swal.fire({
        icon: "error",
        title: "Error de Email",
        text: "Los correos electrónicos no coinciden. Por favor, verifica.",
      });
      return false;
    }

    return isValid;
  };

  // Función para eliminar la orden de Firestore
  const deleteOrderFromFirestore = async (orderId) => {
    try {
      const orderRef = doc(db, "orders", orderId);
      console.log("Eliminando orden con ID:", orderId); //para que se pueda verificar sin entrar al firebase
      await deleteDoc(orderRef);
      console.log("Orden eliminada con éxito"); //para confirmar la eliminacion
      Swal.fire({
        icon: "success",
        title: "Orden eliminada",
        text: "La orden ha sido eliminada.",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al eliminar la orden",
        text: "Ocurrió un error al intentar eliminar la orden. Por favor, comunicate con el soporte. pawpaw@soporte.com.",
      });
    }
  };

  // Manejar el envío del formulario
  const handleSubmit = async () => {
    if (!validateFields()) {
      return;
    }
    try {
      // Crear una referencia a la colección de "orders" en Firestore
      const ordersCollectionRef = collection(db, "orders");
      const orderData = {
        name,
        cardNumber,
        expiryDate,
        cvc,
        selectedOption1,
        selectedOption2,
        selectedOption3,
        address: addressRef.current.value,
        postalCode: postalCodeRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        email,
        notes,
        total: formattedTotal,
      };

      // Agregar la orden a Firestore y obtener el ID generado
      const docRef = await addDoc(ordersCollectionRef, orderData);
      //para que el docente verifique la carga a firebase
      console.log("Orden creada con ID:", docRef.id);

      const orderConfirmationMessage = `
        ¡Gracias por tu compra! <br>
        Tu número de orden es: ${docRef.id}.<br>
        Total de la Compra: $${formattedTotal}<br>
        Nombre: ${name}<br>
        Email: ${email}<br>
        Dirección de Envío: ${addressRef.current.value}<br>
        Código Postal: ${postalCodeRef.current.value}<br>
        Número de Teléfono: ${phoneNumberRef.current.value}<br>
        Notas: ${notes}<br>
        Una persona del correo se contactará contigo para acordar una fecha y horario acorde.
      `;
  
      Swal.fire({
        icon: "success",
        title: "Compra confirmada",
        html: orderConfirmationMessage,
        customClass: {
          content: 'text-left',
        },
        // Mostrar botones "Aceptar" y "Rechazar"
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Rechazar',
      })
      .then((result) => {
        if (result.isConfirmed) {
          console.log("Compra aceptada");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          console.log("Compra rechazada");
          deleteOrderFromFirestore(docRef.id); 
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al procesar la orden",
        text: "Ocurrió un error al intentar procesar la orden. Por favor, inténtalo de nuevo más tarde.",
      });
    }
  };

return (
  <div>


    <div >
      <h2 className="text-center font-bold m-10 ">CONFIRMAR COMPRA</h2>
      <hr />
      <br />
      <p className="text-center" >Total de la Compra: ${formattedTotal}</p>
      <br />
      <hr />
      <br />
      <h2 className=" text-center font-bold">FORMULARIO COMPRA</h2>
      <br />
      

      <label>
        Nombre Completo:
        <input type="text" value={name} onChange={handleNameChange} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Juan Perez" />
      </label>
      <br />
      <label>
        Número de Tarjeta:
        <input type="text" value={cardNumber} onChange={handleCardNumberChange} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="1111 2222 3333 4444" />
      </label>
      <br />
      <label>
        Fecha de Vencimiento:
        <input type="text" value={expiryDate} onChange={handleExpiryDateChange} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="MM/YY" />
      </label>
      <br />
      <label>
        Código de Seguridad:
        <input type="text" value={cvc} onChange={handleCvcChange} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="123" />
      </label>
      <br />
      

      <label>
        Banco/Entidad Financiera:
        <select value={selectedOption1} onChange={(e) => setSelectedOption1(e.target.value)}>
          <option value="">Selecciona una opción</option>
          <option value="opcion1">Banco Ciudad</option>
          <option value="opcion2">Banco Provincia</option>
          <option value="opcion3">Banco Nación</option>
          <option value="opcion4">Banco Macro</option>
          <option value="opcion5">Tarjeta Naranja/NaranjaX</option>
        </select>
      </label>
      <br />
      <br />
      <label>
        Tipo de Tarjeta:
        <select value={selectedOption2} onChange={(e) => setSelectedOption2(e.target.value)}>
          <option value="">Selecciona una opción</option>
          <option value="opcionA">Crédito</option>
          <option value="opcionB">Debito</option>
        </select>
      </label>
      <br />
      <br />
      <label>
        Cuotas:
        <select value={selectedOption3} onChange={(e) => setSelectedOption3(e.target.value)}>
          <option value="">Selecciona una opción</option>
          {selectedOption2 === "opcionA" ? (
            <>
              <option value="opcionX">1 Cuota</option>
              <option value="opcionY">3 Cuotas</option>
              <option value="opcionW">6 Cuotas</option>
              <option value="opcionW">12 Cuotas</option>
              {selectedOption1 === "opcion5" && <option value="opcionN">Plan Z</option>}
            </>
          ) : selectedOption2 === "opcionB" ? (
            <option value="opcionX">1 Cuota</option>
          ) : null}
        </select>
      </label>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <h4 className="font-bold text-center">DATOS DE ENVIO</h4>
      <br />
      <label>
        Dirección de Envío:
        <input type="text" ref={addressRef} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="av. alvarez tomas" />
      </label>
      <br />
      <label>
        Código Postal:
        <input type="text" ref={postalCodeRef} onChange={handlePostalCodeChange} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="1234" />
      </label>
      <br/>
      <label>
        Número de Teléfono:
        <input type="text" ref={phoneNumberRef} onChange={handlePhoneNumberChange} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="+54 11 1234 5678"/> 
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com"  />
      </label>
      <br />
      <label>
        Confirmar Email:
        <input type="email" value={confirmEmail} onChange={handleConfirmEmailChange} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com"  />
      </label>
      
      <hr />
      <br />
      
<div className="flex justify-center"></div>
      <p>Total de la Compra: ${formattedTotal}</p>
      <br />
      <Button className="flex align-center" onClick={handleSubmit}text="CONFIRMAR  COMPRA"/>
    </div>
  
);
};

export default Order;