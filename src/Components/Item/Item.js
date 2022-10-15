import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item(props) {
    return (
        
        <Card style={{ width: '18rem', margin:"10px" }}>
        <Card.Img variant="top" src={props.imagen} />
        <Card.Body>
          <Card.Title>{props.nombre}</Card.Title>
          <Card.Text>${props.precio}</Card.Text>
          <Link to={`/product/${props.id}`}>
            <Button variant="info">Mas detalles</Button>
          </Link>
        </Card.Body>    
      </Card>
     
    )
  }
 

export default Item