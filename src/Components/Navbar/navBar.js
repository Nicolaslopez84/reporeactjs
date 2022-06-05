import "./NavBar.css"
import BtnNav from '../BotonesNav/BtnNav';
import Carrito from '../Carrito/Carrito'

const NavBar = () => {
    
    
    return (
    
    <nav className="">
        <h1 className="nombre__tienda">"Casa Lopez"</h1>
        <BtnNav nombreBtn = "Heladeras" />
        <BtnNav nombreBtn = "Cocinas" />
        <BtnNav nombreBtn = "Audio" />
        <BtnNav nombreBtn = "AA" />
        <Carrito />
    </nav>

    )

}

export default NavBar
