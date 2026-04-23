
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';


function App() {
  const [cartItems,setcartItems] = useState([]);

  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme='dark' position='top-center'/>
          <Header cartItems={cartItems}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<Home/>}/>
            <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} setcartItems={setcartItems}/>}/>
            <Route path="/Cart" element={<Cart cartItems={cartItems} setcartItems={setcartItems} />}/>
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
