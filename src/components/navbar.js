import React from 'react';
import './navbar.css';
import { Outlet, Link } from "react-router-dom";

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var navLinks = navbar.querySelectorAll('span');
    var scrolled = window.scrollY > 0;
  
    if (scrolled) {
      navbar.classList.add('navbar-scrolled');
      navLinks.forEach(function(link) {
        link.classList.add('scrolled');
      });
    } else {
      navbar.classList.remove('navbar-scrolled');
      navLinks.forEach(function(link) {
        link.classList.remove('scrolled');
      });
    }
  });

function navbar()
{
    return(
      <div id="home-nav">
        <nav class="navbar navbar-expand-lg navbar-light border-custom fixed-top">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand text-white" href="#"><span >Flavour Fleet</span></a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <Link class="nav-link text-white" to="/"><span >Home</span> <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-white" to="/aboutus"><span >About Us</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-white" to="orders"><span >All Restaurants</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-white" to="contact"><span>Contact Us</span></Link>
            </li>
          </ul>
        </div>
        </nav>
      </div>
    )
}

export default navbar;