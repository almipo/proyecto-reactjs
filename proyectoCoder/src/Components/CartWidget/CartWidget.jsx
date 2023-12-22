import React from 'react';

import { useCart } from '../../context/CartContext';
import { GiShoppingCart} from "react-icons/gi";
import '../../../src/tailwind.css'

export const CartWidget = () => {
  const { totalQuantity } = useCart();
  return (

 
    <div className="flex" >
      <GiShoppingCart size={40} color="white" />
      <span className="text-orange-500">({totalQuantity})</span>

    </div>
    

  
  );
};