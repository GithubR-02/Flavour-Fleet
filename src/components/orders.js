import react from 'react';
import './orders.css';
import './navbar.css';
import { Outlet, Link } from "react-router-dom";
import axios from "axios";

function Orders(){
    let [responseData, setResponseData] = react.useState([])

    function get(){
        axios.get("http://localhost:5000/orders").then(response => {
                console.log('Hi')
                
            })
    };

    return(
        <div>
            <nav class="navbar navbar-scrolled navbar-expand-lg navbar-light fixed-top" style={{backgroundColor:'white',border:'none',height:'9%'}}>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand text" href="#"><span >Navbar</span></a>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                    <Link class="nav-link text" to="/"><span >Home</span> <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link text" to="/aboutus"><span >About Us</span></Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link text" to="/orders"><span >All Restaurants</span></Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link text" to="/contact"><span>Contact Us</span></Link>
                    </li>
                </ul>
                </div>
            </nav>
            {get()}
            
            <div id="restaurants-carousel">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src={require("./rest_img.jpg")} alt="First slide"></img>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Second slide"></img>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Third slide"></img>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>    
            </div>

            <div id="restaurants-menu">
                <div id="menu-item">
                    <div id="price">$100</div>
                    <img src={require("./promo4.png")}></img>
                    <span id="item-name">BURGER</span><br></br>
                    <span id="item-desc">This is the item description</span>
                    <div id="quantity">
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;