import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./components/about";
import Shop from "./components/shop";
import Cart from "./components/cart";
import Contact from "./components/contact";
import SelectedItem from "./components/selectedItem";

const RouteSwitch = () => {
    return (

            <Routes>
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="shop" element={<Shop />} />
                <Route path="/shop/:id" element={<SelectedItem />} />
                <Route path="shop/shopping-card" element={<Cart />} />
                <Route path="/" element={<App />} />
            </Routes>
    )
}

export default RouteSwitch;