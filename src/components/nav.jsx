import React, { useState } from "react"
import { BrowserRouter, Link } from "react-router-dom"

export default function Nav() {

    const [remember, setRemember] = useState();

    function addStyle(e) {
        if (remember) {
            document.querySelector(remember).classList.remove("style-nav");
        }
        setRemember(`.${e.currentTarget.className}`)
        document.querySelector(`.${e.currentTarget.className}`).classList.add("style-nav");
    }

    return (
            <nav>
                <Link onClick={(e) => { addStyle(e) }} className="main-link" to="/" ><h3>PriTech</h3></Link>
                <Link onClick={(e) => { addStyle(e) }} className="shop-link" to="/shop" ><h3>Shop</h3></Link>
                <Link onClick={(e) => { addStyle(e) }} className="about-link" to="/about" ><h3>About</h3></Link>
                <Link onClick={(e) => { addStyle(e) }} className="contact-link" to="/contact"> <h3>Contact us </h3></Link>
            </nav>
    )
}