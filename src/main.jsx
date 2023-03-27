import React from 'react'
import ReactDOM from 'react-dom/client'
import RouteSwitch from './routeSwitch'
import './index.css'
import Nav from "./components/nav";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <RouteSwitch />
    </BrowserRouter>
  </React.StrictMode>,
)
