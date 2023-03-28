import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

export default function App() {

  return (
    <div className="App">
      <div className="confident-text">
        <h2>We are PriTech, <span>experts around technologies</span></h2>
        <p>In our shop you can find items ranging from graphic cards and motherboards to battery chargers</p>
        <Link to="/shop" ><button className="toShop">Browse shop</button></Link>
      </div>
    </div>
  )
}


