import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/NavBar/Navbar';
import { Routes, Route } from "react-router-dom";
import Products from './component/Products/Products';
import Product from './component/product/Product';
import Cart from './component/cart/Cart';
import Checkout from './component/Checkout/Checkout';
import Login from './component/Login/Login';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Register from './component/Register/Register';
import Footer from './component/Footer/Footer';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/products" element={<Products/>}/>
   <Route path="/products/:id" element={<Product/>}/>
   <Route path="/cart" element={<Cart/>}/>
   <Route path="/checkout" element={<Checkout/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/contact" element={<Contact/>}/>
   </Routes>
    <Footer/>
   
   </>
  );
}

export default App;
