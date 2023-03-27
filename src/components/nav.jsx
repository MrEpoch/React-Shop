import React from "react"
import { BrowserRouter, Link } from "react-router-dom"

export default function Nav() {
    return (
            <nav>
                <Link to="/shop" ><h3>Shop</h3></Link>
                <Link to="/" ><h3>AQUENZ</h3></Link>
                <Link to="/about" ><h3>About</h3></Link>
            </nav>
    )
}