import React from "react"
import { BrowserRouter, Link } from "react-router-dom"

export default function Nav() {
    return (
            <nav>
                <Link className="main-link" to="/" ><h3>PriTech</h3></Link>
                <Link to="/shop" ><h3>Shop</h3></Link>
                <Link to="/about" ><h3>About</h3></Link>
                <Link to="/contact"> <h3>Contact us </h3></Link>
            </nav>
    )
}