import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import CheckOut from './components/CheckOut/CheckOut'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


function App() {

  
 

  return (
  <BrowserRouter>
    <CartProvider>
      <NavBar/>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path='/' element={<ItemListContainer  saludo="Bienvenidos a Amadeo's Ecommerce"/>}/>
        <Route path="/categoria/:idCategoria" element={<ItemListContainer  saludo="Bienvenidos a Amadeo's Ecommerce"/>}/>
        <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/checkout" element={<CheckOut/>} />
      </Routes>
    </CartProvider>
    
    
  </BrowserRouter>    
   );
}

export default App;
