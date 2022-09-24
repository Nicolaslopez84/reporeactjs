import React, { usestate } from "react";

export default function itemCount ({stock , initial}) {

    const [count, setCount] = usestate (initial);

    function handleSustract(){
        if (count > 1) setCount (count - 1);
    }

    function handleAdd(){
        if (count < 5) setCount (count + 1)
    }


 return (
    <div>
        <h3>"apreta comprar"</h3>
        <button onClick={handleSustract}>-</button>
        <strong>{count}</strong>
        <button onClick={handleAdd}>-</button>
    </div>
    )
}


