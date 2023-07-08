import CartWiget from "../CartWiget/CartWiget"

const NavBar = () => {
    return (
        <nav>
            <h3>tu carro ya</h3>
                <div>
                    <button>Carros</button>
                    <button>Pinturas</button>
                    <button>Partes</button>
                    <button>Contactos</button>
                </div>
                <CartWiget />
        </nav>
    )
}

export default NavBar