import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2';
import { Button } from "../Button/Button";
import '../../tailwind.css';

// Carrito
export const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, totalCartItems, removeItem, updateItemQuantity } = useContext(CartContext);

  // Confirmar que el carrito tenga productos
  const handleConfirmOrder = () => {
    if (cartItems.length === 0) {
      Swal.fire({
        title: "Carrito de compras vacío",
        text: "Por favor, revise que todos los productos fueron agregados",
        icon: "error"
      });
    } else {
      navigate("/confirmar-compra");
    }
  };

  return (
   <>
      <h2 className="text-center font-bold m-5">CARRITO</h2>
      hr
    <div className="flex flex-col items-center justify-center h-full max-h-68">
      <hr />
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p className="font-bold">Nombre:</p> <p>{item.name}</p>
            <p className="font-bold">Precio Unitario:</p><p> ${item.price}</p>
            <p className="font-bold">Cantidad:</p><p> {item.quantity}</p>
            <div className="flex  "> 
              <Button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} text="-" />
            <p  className="font-bold align-middle mt-7">Sub total: ${item.subTotal.toFixed(2)}</p>
              <Button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} text="+" />
            <Button onClick={() => removeItem(item.id)} text="Eliminar" />
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div >
        <br />
        <br />
        <hr />
        <br />
      <h3 className="font-bold">Suma total del carrito ${totalCartItems.toFixed(2)}</h3>
      <Button onClick={handleConfirmOrder} text="CONFIRMAR COMPRA" />
      </div>
    </div>
   </>
        
  );
};