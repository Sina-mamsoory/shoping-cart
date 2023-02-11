import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import Shop from './components/Shop';
import Store from './components/Store';
import CartContextProvider from './context/CartContextProvider';

//contextProviders
import ProductContextProvider from './context/ProductContextProvider';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
            <Navbar />
            <Routes>
                <Route path='/products' element={<Store />} />
                <Route path='/products/:id' element={<ProductDetails />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/*' element={<Navigate to='/products'/>} />
            </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
