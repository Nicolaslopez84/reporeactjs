
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({producto}) {
    return (
        
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.image} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>$ {producto.precio}</Card.Text>
          <Card.Text>{producto.descripcion}</Card.Text>
          <ItemCount stock={producto.stock} initial={1} text="Agregar al carrito" />
        </Card.Body>    
      </Card>
     
    )
  }
 

export default ItemDetail