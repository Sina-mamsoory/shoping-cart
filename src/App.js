import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
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
            </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
