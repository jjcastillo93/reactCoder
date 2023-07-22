import React, { useState, useEffect } from 'react';
import { getProductData } from '../../services/asyncMock';
import Item from '../Item/item';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

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
        showCounter={true}
        showDescription={true}
      />
    </div>
  );
}

export default ItemDetailContainer;
