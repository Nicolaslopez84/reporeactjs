import { useState, useEffect } from "react"
import { getProductos, getProductoXCategoria } from "../../Services/Firebase"
/*import { getProductos } from '../../Asyncmock'*/
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
/*import { getProductoXCategoria } from "../../Asyncmock"*/

const ItemListsContainer = ({bienvenida}) => {
    const [productos, setProductos] = useState([])
    const {categoria} = useParams();

    useEffect (() => {
        if(categoria === undefined ){
            getProductos().then (response => {
            setProductos (response)
        })
        }else{
            getProductoXCategoria(categoria).then((response)=> {
            setProductos(response);
            })
        }
    }, [categoria])

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