



import { useState } from "react";
import { Button } from "../Button/Button";

// Contador de productos
export const ItemCount = ({ stock, price, onAdd }) => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  const increment = () => {
    if (count < stock) {
      setCount((prevCount) => prevCount + 1);
      setValue((prevValue) => {
        const numericPrice = parseFloat(price);
        return isNaN(numericPrice) ? prevValue : prevValue + numericPrice;
      });
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      setValue((prevValue) => {
        const numericPrice = parseFloat(price);
        return isNaN(numericPrice) ? prevValue : prevValue - numericPrice;
      });
    }
  };

  return (
    <div className="d-flex flex-column col-2 justify-content-center align-content-center p-4">
      <div>
        <Button text="+" onClick={increment} />
        <strong>{count}</strong>
        <Button text="-" onClick={decrement} />
      </div>
      <strong>Total Producto: </strong>
      <strong>{isNaN(value) ? 0 : value.toFixed(2)}</strong>
      <Button text="Agregar al carrito" onClick={() => onAdd(count)} />
    </div>
  );
};