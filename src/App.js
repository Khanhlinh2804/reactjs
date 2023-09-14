import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Component/Page/Home/Home';
import Introduce from './Component/Page/Introduce/Introduce';
import Men from './Component/Page/vintageWatch/vintageWatch';
import Women from './Component/Page/SmartWatch/SmartWatch';
import Contact from './Component/Page/Contact/Contact';
import Blogs from './Component/Page/Blogs/Blogs';
import MasterLayout from './Component/Layout/MasterLayout';
import Login from './Component/Page/Login/Login';
import Cart from "./Component/Layout/cart/cart";
import { CartProvider } from "react-use-cart";
import Detail from "./Component/Page/Detail/Detail";
import Product from "./Component/Page/Product/Product";
function App() {
  return (
    <div>
      <CartProvider>
        <Routes>
          <Route path="/" element={<MasterLayout children={<Home />} />} />
          <Route
            path="/introduce"
            element={<MasterLayout children={<Introduce />} />}
          />
          <Route path="/product" element={<MasterLayout children={<Product />} />} />
          {/* <Route
            path="/women"
            element={<MasterLayout children={<Women />} />}
          /> */}
          <Route
            path="/blogs"
            element={<MasterLayout children={<Blogs />} />}
          />
          <Route
            path="/contact"
            element={<MasterLayout children={<Contact />} />}
          />
          <Route
            path="/login"
            element={<MasterLayout children={<Login />} />}
          />
          <Route path="/cart" element={<MasterLayout children={<Cart/>} />} />
          <Route path="/detail/:id" element={<MasterLayout children={<Detail />} />} />

        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
