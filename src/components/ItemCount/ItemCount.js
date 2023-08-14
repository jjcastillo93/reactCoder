import React, { useState } from 'react';

const ItemCount = ({ stock, onAdd, productName }) => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const handleAdd = () => {
    if (contador > 0) {
      onAdd(contador);
      setContador(0);
      alert(`Agregaste ${contador} ${productName}`);
    }
  };

  return (
    <div>
      <h2>AGREGAR: {contador}</h2>
      <button onClick={sumar} disabled={contador === stock}>
        +
      </button>
      <button onClick={restar} disabled={contador === 0}>
        -
      </button>
      <button onClick={handleAdd}>Agregar</button> {}
    </div>
  );
};

export default ItemCount;
