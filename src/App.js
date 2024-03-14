import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Product } from './pages/product/product';
import { Cart } from './pages/cart/cart';
import { Navbar } from './navbar'
import { ContextProvider } from './context/context';

function App() {
  
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
