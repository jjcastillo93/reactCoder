import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrder } from '../../services/firebase';

function OrdenConfirm() {
  const [orderData, setOrderData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getOrder(id).then((order) => {
      setOrderData(order);
    });
  }, [id]);

  return (
    <div>
      <h1>Gracias por tu compra</h1>
      <h3>Nos comunicaremos por email para enviarte la factura y el link de pago</h3>
      {orderData !== null ? (
        <div>
          <p>ID de tu compra: {id}</p>
         
        </div>
      ) : (
        <p>Cargando</p>
      )}
    </div>
  );
}

export default OrdenConfirm;
