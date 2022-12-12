import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import '../CSS/App.css';
import ProductoCreado from '../pages/ProductoCreado';
import Navegacion from '../layouts/Navegacion';
import CrearProducto from '../pages/CrearProducto';

function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path='/' element={<ProductoCreado/>} />
        <Route path='/crearproducto' element={<CrearProducto/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
