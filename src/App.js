import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Product } from './pages/product/product';
import { Cart } from './pages/cart/cart';
import { Navbar } from './components/navbar/navbar';
import { ContextProvider } from './context/context';
import { Category } from './pages/category/category';

function App() {
  
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/:id" element={<Category />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
