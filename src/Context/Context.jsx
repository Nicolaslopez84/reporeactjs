import React, {createContext, useState} from "react";

const cartContext = createContext();

function CartContextProvider (props){
    const [cart, setCart] = useState ([]);

    function addItem(producto, count){
        
        if( isInCart(producto.id) === false){
        let newCart= [...cart]
        let newProducto= {...producto, count}
        newCart.push(newProducto);
        setCart(newCart)}
        else{
            let oldProducto = cart.find(p => p.id === producto.id)
            let newProducto = {...oldProducto}
            let newCount = oldProducto.count + count
            newProducto.count = newCount
            let newCart= [...cart]
            newCart = cart.filter((itemInCart) => itemInCart.id !== oldProducto.id);
            newCart.push(newProducto)
            setCart(newCart)
        }
    }

    function removeProducto(idRemove){

        let newCart = cart.filter((itemInCart) => itemInCart.id !== idRemove);
        setCart(newCart);

    }

    function clearCart(){
        let newCart =[]
        setCart(newCart)
    }

    function isInCart(idProductoElegido){
        let productoRepetido = cart.some((itemInCart) => itemInCart.id === idProductoElegido)
        return productoRepetido
    }

    function getTotalPrecio(){
        let total = 0;
        cart.forEach(productosInCart => {
            total = total + productosInCart.count * productosInCart.precio
        })
        return total;
    }

    function getTotalProductos(){
        let total = 0;
        cart.forEach(productosInCart => {
            total = total + productosInCart.count
        })
        return total;

    }

    return (

        <cartContext.Provider value={{
            cart, 
            addItem, 
            getTotalProductos, 
            removeProducto,
            clearCart,
            getTotalPrecio
            }}> 
            {props.children}
        </cartContext.Provider>
    )

}

export {cartContext, CartContextProvider};

