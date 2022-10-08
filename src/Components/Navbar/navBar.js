import "./NavBar.css"
import BtnNav from '../BotonesNav/BtnNav';
import CartWidGet from "../CartWidGet/CartWidGet";
import { Link } from "react-router-dom";

const NavBar = () => {
    
    
    return (
    
    <nav className="">
        <Link to="/"><h1 className="nombre__tienda">"Casa Lopez"</h1></Link>
        <Link to="/"><BtnNav onClick="" nombreBtn = "Inicio" /></Link>
        <Link to="/category/Heladeras"><BtnNav onClick="" nombreBtn = "Heladeras" /></Link>
        <Link to="/category/Telefonia"><BtnNav onClick="" nombreBtn = "Telefonia" /></Link>
        <Link to="/category/Electro"><BtnNav onClick="" nombreBtn = "Electro" /></Link>
        <Link to="/category/AA"><BtnNav onClick="" nombreBtn = "AA" /></Link>
        <CartWidGet />
    </nav>

    )

}

export default NavBar