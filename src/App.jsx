import './App.css';
import ListContainer from './componentes/pages/listContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './componentes/navbar/navbar';
import ItemDetailConainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Carrito from './componentes/Carrito/Carrito';
import { useParams } from 'react-router-dom';
import ItemListConainer from './componentes/ItemListContainer/ItemListContainer';
import { CartContextProvider } from './context/CartContext';
function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListConainer />} />
            <Route path='/:tipo' element={<ItemListConainer />} />
            <Route path="/detalle/:id" element={<ItemDetailConainer />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path='/*' element={<ItemListConainer />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
