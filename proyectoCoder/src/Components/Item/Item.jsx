
import { Link } from "react-router-dom";
import '../../tailwind.css';
import React, { useState } from 'react';
import { useCart } from "../../context/CartContext";
import Swal from 'sweetalert2';
import{Button} from "../Button/Button";
//Tarjetas con los productos
export const Item = ({id, name, img, descripion,price,stock }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   
    //agregar al carrito
    const { addItem } = useCart();
    const onAdd = (items) => {
      addItem({
        id,
        name,
        price,
        stock,
        description,
        img,
        count: items


      }, items);

      Swal.fire({
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500,
      });
    };

  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    return (
      <div className="border-2 border-slate-600 rounded-lg w-52">
        <div className="grid grid-cols-1 grid-raw-3 place-items-center">
          <div className="m-5 size-20 content-center">
          <img src={img} alt=""  />

          </div>
          <div className="m-5 size-20 content-center">
          <h5 className="p-2 text-center">{name}</h5>

          </div>
          <div className="align-bottom m-5">
          <Link to={`/item/${id}`}>
            <Button text="Detalles"  />
          </Link>
          

          </div>

    
        </div>
      </div>
    );
  };