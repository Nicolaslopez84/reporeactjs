import { useState, useEffect } from "react"
import { getProducto} from "../../Services/Firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom"

function ItemDetailContainer (props){
    const [producto, setProducto] = useState({});
    const [error, setError] = useState(null);
    const {id} = useParams ();

    useEffect (() => {
        getProducto(id)
        .then ((response) => {
            setProducto (response);
        })
    }, [id]);

    return (   
        <div>
            {error !== null ? (<h4>error: {error}</h4>) :
            (<><h1>
                "Lopcars, Los mejores autos para rentar"
            </h1>
            <ItemDetail producto={producto}/>
            </>)}
        </div>
    );
}

export default ItemDetailContainer