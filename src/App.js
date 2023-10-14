import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home.js';
import Menu from './components/menu.js';
import Orders from './components/orders.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Flavour-Fleet" element={<Home/>} />
        <Route path="/Flavour-Fleet/menu" element={<Menu />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
