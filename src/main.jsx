import React from 'react'
import ReactDOM from 'react-dom/client'
import RouteSwitch from './routeSwitch'
import './index.css'
import Nav from "./components/nav";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <RouteSwitch />
  </React.StrictMode>,
)
