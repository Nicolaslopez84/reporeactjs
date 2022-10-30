import React, { useState } from "react";
import Btn from "../BotonesNav/Btn";

export default function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);
  
    function handleSubstract() {
      if (count > 1) setCount(count - 1);
    }
  
    function handleAdd() {
      if (count < stock) setCount(count + 1);
    }

    return (
      <div>
        <h2>Realiza tu compra</h2>
          <Btn onClick={handleSubstract}>-</Btn>
          <strong>{count}</strong>
          <Btn onClick={handleAdd}>+</Btn>
          <Btn onClick={ ()=> {onAdd(count)}}>Agregar al carrito</Btn>
      </div>
    );
}


