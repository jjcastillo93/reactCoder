import React, { useState } from 'react';

const Contador = ({ stock }) => {
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

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={sumar} disabled={contador === stock}>
        Sumar
      </button>
      <button onClick={restar} disabled={contador === 0}>
        Restar
      </button>
    </div>
  );
};

export default Contador;
