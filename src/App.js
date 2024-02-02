import React from "react";
import "./App.css";

import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import SigninPage from "./pages/SigninPage";
import SignUpPage from "./pages/SignUpPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductdetailPage from "./pages/ProductdetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<SigninPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product-detail" element={<ProductdetailPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
