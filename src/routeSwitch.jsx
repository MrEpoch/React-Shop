import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./components/about";
import Shop from "./components/shop";
import Cart from "./components/cart";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/shopping-card" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;