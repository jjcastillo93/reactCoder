import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App Fondo">
      <BrowserRouter>
      <NavBar />
          <Routes>
              <Route path='/' element={ <ItemListContainer />} />
              <Route path='/category/:categoryId' element={ <ItemListContainer />} />
              <Route path='/product/:id' element={<ItemDetailContainer />} />
              <Route path='*' element={<h1>Pagina no encontroda error 404</h1>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
