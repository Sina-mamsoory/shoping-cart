import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/ProductDetails';
import Store from './components/Store';

//contextProviders
import ProductContextProvider from './context/ProductContextProvider';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
          <Routes>
              <Route path='/products' element={<Store />} />
              <Route path='/products/:id' element={<ProductDetails />} />
          </Routes>
      </ProductContextProvider>
    </div>
  );
}

export default App;
