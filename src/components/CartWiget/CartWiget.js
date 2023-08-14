import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../App";
import { Link } from "react-router-dom";
import "./CartWiget.css";

function CartWidget() {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to={"/cart"} className="cart-widget-container">
      <div className="cart-widget">
        <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
        <span className="cart-quantity">{totalQuantity}</span>
      </div>
    </Link>
  );
}

export default CartWidget;
