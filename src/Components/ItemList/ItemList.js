import Item from "../Item/Item"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemList = ({productos}) => {
    return (

         <Container m={2}>
         <Row>
           <Col lg>{productos.map(producto => <Item key={producto.id} {...producto} />)}</Col>
         </Row>
       </Container> 
    )
}


export default ItemList