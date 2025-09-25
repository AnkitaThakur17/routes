import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Products from "./pages/products/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Electronics from "./pages/products/Electronics";
import Clothing from "./pages/products/Clothing";
import Accessories from "./pages/products/Accessories";
import ProductDetails from "./pages/products/ProductDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Nested Products routes */}
        <Route path="/products" element={<Products />}>
          <Route path="electronics" element={<Electronics />} />
          <Route path="electronics/:id" element={<ProductDetails />} /> 
          <Route path="clothing" element={<Clothing />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
