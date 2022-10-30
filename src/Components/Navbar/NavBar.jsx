import "./NavBar.css"
import Btn from '../BotonesNav/Btn';
import CartWidGet from "../CartWidGet/CartWidGet";
import { Link } from "react-router-dom";

const NavBar = () => {
    
    
    return (
    
    <nav className="">
        <Link to="/"><h1 className="nombre__tienda">"Lopez Rent a Car"</h1></Link>
        <Link to="/"><Btn>Inicio</Btn></Link>
        <Link to="/categoria/SUV"><Btn>Suv</Btn></Link>
        <Link to="/categoria/Sedan"><Btn>Sedan</Btn></Link>
        <Link to="/categoria/Deportivos"><Btn>Deportivos</Btn></Link>
        <Link to="/categoria/Pickup"><Btn>Pickup</Btn></Link>
        <Link to="/categoria/Vans"><Btn>Vans</Btn></Link>
        <CartWidGet />
    </nav>
    

    )

}

export default NavBar