import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./Components/Navbar";
import Products from "./Pages/Products";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import CartDetails from "./Pages/CartDetails";
import ProductDetails from "./Pages/ProductDetails";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Products></Products>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/cart-details" element={<CartDetails />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
