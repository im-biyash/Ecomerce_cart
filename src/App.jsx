import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Navbar from "./Componenets/Navbar";
import Products from "./Componenets/Products";
import EachProduct from "./Componenets/EachProduct"; 
import CartPage from './Componenets/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Wrap all your Route components with Routes */}
        <Route path="/" element={<Products />} /> {/* Use 'element' prop to specify the component */}
        <Route path="/product/:productId" element={<EachProduct />} /> {/* Use 'element' prop to specify the component */}
        <Route path="/cartPage" element={<CartPage />} /> {/* Use 'element' prop to specify the component */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
