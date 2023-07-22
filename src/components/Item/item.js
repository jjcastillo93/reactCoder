import React from 'react';
import './Item.css';
import Contador from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const { id, imagen, nombre, precio, descripcion, stock, showButton, showCounter, showDescription } = props;

  return (
    <div className='contenedorCard' key={id}>
      <img width={'300px'}  style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}  src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      {showDescription && <p>{descripcion}</p>}
      <p>Stock: {stock}</p>
      {showButton && (
        <Link to={`/product/${id}`}>
          <button className='btnNavCard'>Ver detalle</button>
        </Link>
      )}
      {showCounter && <Contador stock={stock} />}
    </div>
  );
};

export default Item;
