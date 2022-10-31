import "./NavBar.css"
import Btn from '../BotonesNav/Btn';
import CartWidGet from "../CartWidGet/CartWidGet";
import { Link } from "react-router-dom";
import bootstrap from 'bootstrap'

const NavBar = () => {
    
    
    return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <Link  to="/">
                <p className="navbar-brand" href="#">
                    <img src="../../images/logoweb.png" alt="" width="120" height="120"/>
                </p>
            </Link >
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-1 mb-lg-0 ">
              <li className="nav-item">
              <Link className="Link" to="/"><p type="button " className="nav-link" aria-current="page">Inicio</p></Link>
              </li>
              <li className="nav-item">
              <Link className="Link" to="/categoria/Sedan"><p className="nav-link " aria-current="page">Sedan</p></Link>
              </li>
              <li className="nav-item">
              <Link className="Link" to="/categoria/Deportivos"><p className="nav-link" aria-current="page">Deportivos</p></Link>
              </li>
              <li className="nav-item">
              <Link className="Link" to="/categoria/Pickup"><p className="nav-link " aria-current="page">Pickup</p></Link>
              </li>
              <li className="nav-item">
              <Link className="Link" to="/categoria/Vans"><p className="nav-link " aria-current="page">Vans</p></Link>
              </li>
              <li className="nav-item">
              <Link className="Link" to="/categoria/SUV"><p className="nav-link " aria-current="page">Suvs</p></Link>
              </li> 
            </ul>
          </div>
            <div className="m-1 d-flex justify-content-end">
              <CartWidGet />
            </div>
        </div>
    </nav>

    )

}

export default NavBar