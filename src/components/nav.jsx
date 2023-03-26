import React from "react"
import { BrowserRouter, Link } from "react-router-dom"

export default function Nav() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/shop" ><h3>Shop</h3></Link>
                <Link to="/about" ><h3>About</h3></Link>
                <Link to="/" ><h3>Main</h3></Link>
            </nav>
        </BrowserRouter>
    )
}