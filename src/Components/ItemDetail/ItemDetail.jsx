
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount"
import {useState} from "react"
import { useContext } from 'react';
import { cartContext } from '../../Context/Context';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

function ItemDetail({producto}) {

  const [count, setCount] = useState(0);
  const {addItem} = useContext (cartContext)

  function handdleOnAdd (count){
    addItem(producto, count);
    setCount(producto, count);
  }

  if (producto.nombre)
    return (
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>${producto.precio}</Card.Text>
          <Card.Text>{producto.marca}</Card.Text>
          <Card.Text>{producto.descripcion}</Card.Text>
          { count === 0 ?
            <ItemCount onAdd={handdleOnAdd} stock={producto.stock} initial={1}/> :
            <Link to="/cart"><h2>Ir al Carrito</h2></Link>
          }
          </Card.Body>   
      </Card>
      </div>
    )
    return (<Loader/>)
}
 

export default ItemDetail