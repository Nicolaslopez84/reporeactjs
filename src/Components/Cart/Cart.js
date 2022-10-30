import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../Context/Context'
import { crearCompra } from "../../Services/Firebase"
import UserForm from '../UseForm/UseForm'

export default function Cart() {
  
    const {cart, removeProducto, clearCart, getTotalPrecio} = useContext(cartContext);

    function handleCheckout(){
        const datosComprador = {
            nombre: "",
            email: "",
            phone: "",
        };

        const ordenData = {
            datosComprador,
            cart,
            total: getTotalPrecio(),
            date: new Date()
        };

        crearCompra(ordenData);
    }

  return (
    <>
        {cart.map((producto) => (
            <div key={producto.id}>
            <h2>{producto.nombre}</h2>
            <h4>${producto.precio}</h4>
            <h4>{producto.count} dias</h4>
            <h4>Precio Total: ${producto.precio * producto.count}</h4>
            <button onClick={()=> removeProducto(producto.id)}>Eliminar Producto</button>
            </div>
  
        ))}
        {cart.length > 0 ? <button onClick={clearCart}>Vaciar carrito</button> : 
        <h2>Tu carrito esta vacio</h2>
        }
        {cart.length > 0 ? <UserForm cart={cart} getTotalPrice={getTotalPrecio} /> : 
        <alert>"Completa tu carrito para comprar"</alert> 
        }
        
    </>
    )
}
