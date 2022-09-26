import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Navbar/Shop/Shop';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [carts, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 6)))
  }, []);

  const handleAddToCart = (product) =>{
    const newCart = [...carts, product];
    setCart(newCart);
  }
  return (
    <div className="App">
      <Navbar carts={carts}></Navbar>
      <div className='w-full py-14'>
        <div className='grid grid-cols-3 gap-5 w-[85%] mx-auto'>
          {
            products.map(product => <Shop product={product} key={product.id} handleAddToCart={handleAddToCart}></Shop>)
          }
        </div>

      </div>
    </div>
  );
}

export default App;
