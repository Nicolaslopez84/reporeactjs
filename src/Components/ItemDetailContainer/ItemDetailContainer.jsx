import { useState, useEffect } from "react"
import { getProducto } from '../../Asyncmock'
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom"

function ItemDetailContainer (props){
    const [producto, setProducto] = useState([]);

    const {id} = useParams ();

    useEffect (() => {
        getProducto(id).then (response => {
            setProducto (response)
        });
    }, [id])

    return (
        
        <div>
            <h1>
                "Bienvenido a Nuestra Tienda"
            </h1>
        
            <ItemDetail producto={producto}/>
            
        </div>
    )
}

export default ItemDetailContainer