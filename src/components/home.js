import './home.css';
import navbar from './navbar.js';
import React from 'react';
import {FaFacebook} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {FaPinterest} from "react-icons/fa";
import {ReactComponent as DeliveryBoy} from "./delivery-boy.svg";
import {useState} from 'react';
import { Outlet, Link } from "react-router-dom";

function Home()
{
  const [active, setActive] = useState(false);

  const handleMouseOver = () => {
    setActive(true);
  };
    return(
    <body>
        <div id="hero">
            {navbar()}
            <img id="bg2" src={require("./hero-bg-shape.png")} alt="Restaurants"></img>
            <img id="bg4" src={require("./hero-banner-bg.png")} alt="Restaurants"></img>
            <img id="bg3" src={require("./hero-banner.png")} alt="Restaurants"></img>
            <div id="caption">
                <h3>Grab & Get a 50% discount today</h3>
                <h1>For your Favourite Burgers in Town!</h1>
                <p>Order food from your favourite restaurants today and get it delivered at your doorstep.</p>
                <Link to="menu"><button>Order Now</button></Link>
            </div>
        </div>
        <div id="promo">
        <div class="container-fluid py-2">
        <div class="d-flex flex-row flex-nowrap">
            <div class="card">
                <div class="card-body">
                    <img src={require("./promo-icon-1.png")} alt=""></img><br></br><br></br>
                    <h5 class="card-title">Mexican Pizza</h5>
                    <p class="card-text">Perfect for sharing or savoring all to yourself, our Mexican Pizza is a must-try for pizza enthusiasts and Mexican cuisine lovers alike.</p>
                </div>
                <img src={require("./promo1.png")} style={{width:'90%'}} alt="..."></img>
            </div>
            <div class="card">
                <div class="card-body">
                    <img src={require("./promo-icon-2.png")} alt=""></img><br></br><br></br>
                    <h5 class="card-title">Soft Drinks</h5>
                    <p class="card-text">Quench your thirst and elevate your meal with our refreshing selection of Soft Drinks. Enjoy a cool and satisfying sip that adds a touch of refreshment to every bite.</p>
                </div>
                <img src={require("./promo2.png")} style={{width:'70%'}} alt="..."></img>
            </div>
            <div class="card">
                <div class="card-body">
                    <img src={require("./promo-icon-3.png")} alt=""></img><br></br><br></br>
                    <h5 class="card-title">French Fry</h5>
                    <p class="card-text">Our French Fries offer a savory, mouthwatering experience that's impossible to resist. Satisfy your craving for classic comfort food with each and every bite.</p>
                </div>
                <img src={require("./promo3.png")} style={{width:'100%'}} alt="..."></img>
            </div>
            <div class="card">
                <div class="card-body">
                    <img src={require("./promo-icon-4.png")} alt=""></img><br></br><br></br>
                    <h5 class="card-title">Burger King</h5>
                    <p class="card-text">Experience the royal treatment of flavor with our Burger King selection. Discover why the King reigns supreme in the world of burgers.</p>
                </div>
                <img src={require("./promo4.png")} style={{width:'85%'}} alt="..."></img>
            </div>
            <div class="card">
                <div class="card-body">
                    <img src={require("./promo-icon-5.png")} alt=""></img><br></br><br></br>
                    <h5 class="card-title">Chicken Masala</h5>
                    <p class="card-text">Transport your taste buds to the vibrant streets of India with our Chicken Masala.  Experience the magic of Indian cuisine in every delightful bite.</p>
                </div>
                <img src={require("./promo5.png")} style={{width:'70%'}} alt="..."></img>
            </div>
        </div>
        </div>
        </div>
        <div class="adv clearfix">
        <div id="banner">
          <h2 class="title">The Navbar Gets You Excellent Of <span class="span">Quality Burgers!</span> </h2>
          <p class="text">The restaurants that we connect you to have also catered to many parts of north India and 
          have claimed to be the best in the food that they make for their customers.</p>
          <Link to="./menu"><button class="hover">Explore</button></Link>
        </div>
        <figure class="image">
          <img id="pic1" src={require("./cta-banner.png")}></img>
          <img id="pic2" src={require("./sale-shape-red.png")}></img>
        </figure>
        </div>

        <div id="delivery"
         onMouseOver={handleMouseOver}
         class={active ? 'animate' : '' }>
          <div class="del" id="delivery-image">
            <DeliveryBoy style={{width:'150%'}}/>
          </div>
          <div class="del" id="delivery-caption">
          <h1 class="title">A Moments Of Delivered On <span style={{color:"orangered"}}>Right</span> Time & Place</h1>
          <p class="text">Our people make sure that your tasty snacks are delivered at the right place on the right time. Afterall we sincerely 
            believe that hunger can never be compromised. </p>
          <button class="hover">Order Now</button>
          </div>
        </div>

        <div id="footer">
            <div id="cont">
            <a href="" class="logo">Flavour Fleet<span class="span">.</span></a>
            <p>Helps you get in touch with your favourite restaurants around you and get a tasty snack delivered at your home</p>
            <ul class="social-list">

            <li>
              <a href="#" class="social-link" >
                <FaFacebook/>
              </a>
            </li>

            <li>
              <a href="#" class="social-link" >
                <AiFillTwitterCircle/>
              </a>
            </li>

            <li>
              <a href="#" class="social-link" >
                <AiFillInstagram/>
              </a>
            </li>

            <li>
              <a href="#" class="social-link" >
                <FaPinterest/>
              </a>
            </li>

          </ul>
          </div>
          <ul class="footer-list">

          <li>
            <p class="footer-list-title">Contact Info</p>
          </li>

          <li>
            <p class="footer-list-item">+1 (123) 456-7890</p>
          </li>

          <li>
            <p class="footer-list-item">React_02@Gmail.com</p>
          </li>

          <li>
            <address class="footer-list-item">Someplace, Somewhere, MT 09514</address>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Opening Hours</p>
          </li>

          <li>
            <p class="footer-list-item">Monday-Friday: 08:00-22:00</p>
          </li>

          <li>
            <p class="footer-list-item">Tuesday 4PM: Till Mid Night</p>
          </li>

          <li>
            <p class="footer-list-item">Saturday: 10:00-16:00</p>
          </li>

        </ul>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p class="copyright-text">
          &copy; 2022 <a href="#" class="copyright-link">R_02 React Webpage</a> All Rights Reserved.
        </p>
      </div>
    </div>
    </body>);
}

export default Home;