import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import './components/fonts/fonts.css';
import './components/colors/colors.css';
import { Navbar } from './components/navbar';
import { Home } from './components/home';
import { Products } from './components/products';
import { Cart } from './components/cart';
import { Contact } from './components/contact';
import { NoMatch } from './components/nomatch';

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent)
      return;
    setCart([...cart, {...item, quantity: 1}]);
  }

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if(data.id === item.id)
      ind = index;
    });
    const temArr = cart;
    temArr[ind].quantity += d;
    if(temArr[ind].quantity === 0)
    temArr[ind].quantity = 1;
    setCart([...temArr]);
  }

  return (
    <div className="App">
      <Navbar size={cart.length} />
      <Cart cart={cart} setCart={setCart} handleChange = {handleChange}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products handleClick={handleClick} />}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
    </div>
  );
}

export default App;
