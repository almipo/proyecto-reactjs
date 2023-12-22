import { ItemCount } from "../ItemCount/ItemCount";

import { useCart } from "../../context/CartContext";

import Swal from 'sweetalert2';


export const ItemDetail = ({ id,description, img, price, stock, name}) => {
  const { addItem } = useCart();
  const onAdd = (items) => {
    addItem({
      id,
      name,
      price,
      stock,
      description,
      img,
    }, items);

    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500,
    });
  };


    return (
      
      <div className="border-2 border-slate-600 rounded-lg m-5 between ">
        
          <div className="grid grid-cols-2 gap-0 grid rows-3 justify-items-center ">
            <div>
            <h5 className="place-items-center m-2 text-center">{name}</h5>
            <img src={img} alt="" className="m-10  size-24  "/>
            </div>
            <div className="">
          
            <p className="text-justify mt-20 inline-block align-baseline p-2 "> {description} </p>
            <p className="mt-5">Stock:{stock} unidades</p>
            <p className="">Precio: ${price} </p>
            <ItemCount stock={stock} onAdd={onAdd} price={price}  className="  p-2 text-center"/>
            </div>
             </div>
        
      </div>
      
    );
  };