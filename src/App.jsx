
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App