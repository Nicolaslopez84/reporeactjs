import { useState, useEffect } from "react"
import { getProductos } from '../../Asyncmock'
import ItemList from "../ItemList/ItemList"

const ItemListsContainer = ({bienvenida}) => {
    const [productos, setProductos] = useState([])

    useEffect (() => {
        getProductos().then (response => {
            setProductos (response)
        })
    }, [])

    return (
        
        <div>
            <h1>
                {bienvenida}
            </h1>
            <ItemList productos={productos}/>
        </div>


    )

}

export default ItemListsContainer