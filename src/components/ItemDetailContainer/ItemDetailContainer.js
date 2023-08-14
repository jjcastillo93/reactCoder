import React, { useState, useEffect, useContext } from 'react';
import { getProductData } from '../../services/firebase';
import Item from '../Item/item';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../App';

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const { addToCart, cart } = useContext(CartContext);

  useEffect(() => {
    async function requestProduct() {
      const respuesta = await getProductData(id);
      setProduct(respuesta);
    }
    requestProduct();
  }, [id]);

  if (Object.keys(product).length === 0) {
    return <div className="item-detail-container">Cargando...</div>;
  }


  const totalQuantityInCart = cart.reduce((total, item) => {
    if (item.product.id === product.id) {
      return total + item.quantity;
    }
    return total;
  }, 0);


  const availableStock = product.stock - totalQuantityInCart;

  const shouldShowCounter = availableStock > 0;

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
  };

  return (
    <div className="item-detail-container">
      <h1>Detalle del Producto</h1>

      <Item
        id={product.id}
        imagen={product.imagen}
        nombre={product.nombre}
        precio={product.precio}
        descripcion={product.descripcion}
        stock={product.stock}
        showButton={false}
        showDescription={true}
      />

      {shouldShowCounter && (
        <ItemCount stock={availableStock} onAdd={handleAdd} productName={product.nombre} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
