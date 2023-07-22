import CartWiget from "../CartWiget/CartWiget"
import './NavBar.css'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="containerNav">
            <h3 className="titleNav"><Link to="/" className="tituloNav">tu carro ya</Link></h3>
                    <ul className="containerLi">
                        <li>
                            <Link to="/category/autos" className="btnNav">Autos</Link>
                        </li>
                        <li>
                            <Link to="/category/partes" className="btnNav">Partes</Link>
                        </li>
                        <li>
                            <Link to="/category/pintura" className="btnNav">Pinturas</Link>
                        </li>
                        <li>
                            <Link to="*" className="btnNav">contactos</Link>
                        </li>
                    </ul>
                    <CartWiget />
        </nav>
    )
}

export default NavBar