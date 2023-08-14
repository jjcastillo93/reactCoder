import React, { useState, useEffect } from 'react';
import { getProductsByCategory } from '../../services/firebase';
import Item from '../Item/item';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { getData } from '../../services/firebase';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    async function requestProducts() {
      let respuesta;
      if (categoryId) {
        respuesta = await getProductsByCategory(categoryId);
      } else {
        respuesta = await getData();
      }
      setProducts(respuesta);
    }
    requestProducts();
  }, [categoryId]);

  return (
    <div>
      <h1>Productos</h1>
      <div className='contenedorFlex'>
        {products.map((item) => (
          <Item key={item.id} {...item} showButton={true} showCounter={false} showDescription={false} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
