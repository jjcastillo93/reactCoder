import React, { useContext, useState } from 'react';
import { CartContext } from '../../App';
import { createOrder } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';
import './CartContainer.css';

function CartContainer() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [buyerData, setBuyerData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const validatePhone = (input) => {
    return /^\d+$/.test(input);
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (buyerData.name.trim() === '') {
      valid = false;
      errors.name = 'El nombre es obligatorio';
    }

    if (buyerData.email.trim() === '') {
      valid = false;
      errors.email = 'El email es obligatorio';
    }

    if (!validatePhone(buyerData.phone)) {
      valid = false;
      errors.phone = 'El teléfono debe contener solo números y es obligatorio';
    }

    setFormErrors(errors);
    return valid;
  };

  const handlecheckout = async () => {
    if (validateForm()) {
      cart.forEach((item) => {
        removeFromCart(item.product.id);
      });

      const ordenData = {
        item: cart,
        buyer: buyerData,
        date: new Date(),
        total: cart.reduce((total, item) => total + item.product.precio * item.quantity, 0),
      };

      const idOrder = await createOrder(ordenData);
      navigate(`/order-confirmation/${idOrder}`);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBuyerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.product.id}>
              <h2>{item.product.nombre}</h2>
              <img src={item.product.imagen} alt={item.product.nombre} width="50" height="50" />
              <p>Precio: ${item.product.precio}</p>
              <p>Stock seleccionado: {item.quantity}</p>
              <button className="buy-button" onClick={() => removeFromCart(item.product.id)}>Eliminar</button>
            </div>
          ))}
          <div>
            <h2>Precio Total: ${cart.reduce((total, item) => total + item.product.precio * item.quantity, 0)}</h2>
            <form className="buyer-form">
              <div className="form-group">
                <label>Nombre:</label>
                <input type="text" name="name" value={buyerData.name} onChange={handleInputChange} />
                {formErrors.name && <p className="error">{formErrors.name}</p>}
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" value={buyerData.email} onChange={handleInputChange} />
                {formErrors.email && <p className="error">{formErrors.email}</p>}
              </div>
              <div className="form-group">
                <label>Teléfono:</label>
                <input type="text" name="phone" value={buyerData.phone} onChange={handleInputChange} />
                {formErrors.phone && <p className="error">{formErrors.phone}</p>}
              </div>
            </form>
            <button className="buy-button" onClick={handlecheckout}>Comprar</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartContainer;
