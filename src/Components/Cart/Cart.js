import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../Context/Context'
import { crearCompra } from "../../Services/Firebase"
import UserForm from '../UseForm/UseForm'
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";

export default function Cart() {
  
    const {cart, removeProducto, clearCart, getTotalPrecio} = useContext(cartContext);
    const navigate = useNavigate()

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

    function limpiarCarrito(){
        Swal.fire({
          title: 'Seguro de vaciar tu carrito?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Vaciar',
          denyButtonText: `No vaciar`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Volvemos al inicio', '', 'success')
            navigate(`/`);
            clearCart();
          } else if (result.isDenied) {
            Swal.fire('Perfecto! podes seguir comprando', '', 'info')
          }
        });
      }
      
  return (
    <>
        {cart.map((producto) => (
            
            
                    <div key={producto.id} className="card m-3" style={{width: "%"}}>
                        <div className="row g-0">
                            <div className="col-4">
                                <img src={producto.imagen} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-8">
                                <div className="card-body">
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="card-text">Precio Total: ${producto.precio * producto.count}</p>
                                    <h4>${producto.precio}</h4>
                                    <h4>{producto.count} dias</h4>
                                    <button onClick={()=> cart.length == 0? clearCart() : removeProducto(producto.id)} type="button" className="btn btn-outline-danger mt-1">Eliminar producto</button>
                                </div>
                            </div>
                        </div>
                    </div> 
            
  
        ))}
        <button onClick={limpiarCarrito} type="button" className="btn btn-outline-danger mt-1">Vaciar carrito</button> 
        <UserForm cart={cart} getTotalPrice={getTotalPrecio} />
     
        
    </>
    )
}
