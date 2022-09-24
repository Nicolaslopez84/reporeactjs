import "./NavBar.css"
import BtnNav from '../BotonesNav/BtnNav';
import Carrito from '../Carrito/Carrito'

const NavBar = () => {
    
    
    return (
    
    <nav className="">
        <h1 className="nombre__tienda">"Casa Lopez"</h1>
        <BtnNav onClick="" nombreBtn = "Heladeras" />
        <BtnNav onClick="" nombreBtn = "Telefonia" />
        <BtnNav onClick="" nombreBtn = "Electro" />
        <BtnNav onClick="" nombreBtn = "AA" />
        <Carrito />
    </nav>

    )

}

export default NavBar
