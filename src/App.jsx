import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductSection from "./Components/product/ProductSection";
import CartPage from "./Components/cart/CartPage";
import Checkout from "./Components/checkout/Checkout";
import Header from "./Components/cart/Header";
import Home from "./Components/product/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductSection />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;