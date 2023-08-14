import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from 'react';
import CartContainer from './components/CartContainer/CartContainer';
import OrdenConfirm from './components/OrdenConfirm/OrdenConfirm';





const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const updatedCart = [...cart, { product, quantity }];
    setCart(updatedCart);
    console.log('Producto agregado al carrito:', { product, quantity });
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.product.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="App Fondo">
      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/product/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path= "/order-confirmation/:id" element={ <OrdenConfirm/>}/>
            <Route path='*' element={<h1>Pagina no encontrada error 404</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
export { CartContext };
