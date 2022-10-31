
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { cartContext } from '../../Context/Context';
import { Link } from 'react-router-dom';

const CartWidGet = () => {

    const {getTotalProductos} = useContext(cartContext)
   
        return (
        <Link to="/cart/cart"><FontAwesomeIcon icon={faCartShopping}/>{getTotalProductos()>0 && getTotalProductos()}</Link>
            
        )
}

export default CartWidGet;