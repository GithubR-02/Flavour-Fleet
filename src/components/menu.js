import react from 'react';
import './menu.css';
import './navbar.css';
import {MdLocationPin} from 'react-icons/md';
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from 'react';

function Menu()
{
        const [resData, setresData] = useState([]);
        const [itemData, setitemData] = useState([]);
        useEffect( () => {       
            get()       
        },   [])

        async function get(){
            axios.get("http://localhost:5000/menu_restaurants").then(response => {
                    setresData(response.data);
                })
            axios.get("http://localhost:5000/menu_items").then(response => {
                    setitemData(response.data);
                })
    }

    return(
        <div>
            <nav className="navbar navbar-scrolled navbar-expand-lg navbar-light fixed-top" style={{backgroundColor:'white',border:'none',height:'9%'}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand text" href="#"><span >Navbar</span></a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                    <Link className="nav-link text" to="/"><span >Home</span> <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text" to="/aboutus"><span >About Us</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text" to="/orders"><span >All Restaurants</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text" to="/contact"><span>Contact Us</span></Link>
                    </li>
                </ul>
                </div>
            </nav>
            <div id='menu-page'>
                <img id='menu-back' src={require("./Menu_back.jpeg")} alt=""></img>
                <div id='menu'>
                
                <div id='restaurants-section'>
                    <p id='title'>Most <span>Popular</span> Restaurants</p>
                    <div id='restaurants'>
                    {resData.map(response => (
                        <>
                        <div id='restaurant-card'>
                            <div id='location'>
                                <p><MdLocationPin/> {response.location}</p>
                            </div>
                            <div id='image'>
                            <img src={response.image} alt=""></img>
                            </div>
                            <div id='restaurant-card-desc'>
                                <p id='desc-title'>{response.restaurant_name}</p>
                                <p id='desc-content'>{response.description} </p>
                                <button id='desc-button'>Check Menu</button>
                            </div>
                        </div>
                        </>
                        ))}
                    </div>
                </div>
                
                <div id='editors-section'>
                    <p id='title'><span>Editor's</span> Choice</p>
                    <div id='foods'>
                    {itemData.map(response => (
                        <>
                        <div id='food-card'>
                            <div id='price'>
                                <p>₹{response.price}</p>
                            </div>
                            <img src={response.image} alt=""></img>
                            <div id='food-card-desc'>
                                <p id='desc-title'>{response.item_name}</p>
                                <p id='desc-content'>{response.description} </p>
                                <button id='desc-button'>Order Now</button>
                            </div>
                        </div>
                        </>
                        ))}
                    </div>
                </div>
                </div>
            </div>
    </div>
    )
}

export default Menu;