import { Grid } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Jumbotron,Container,Carousel,Card,CardDeck } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import {} from "react-icons/fa"
import { BsFillPeopleFill } from "react-icons/bs";
import { BiDollar,BiPaperPlane } from "react-icons/bi";
import "../index.css"
const LandingPage = () => {
    return ( 
        <div>
        <Grid contained>
            <Grid contained>
                <h1 style={{textAlign:"center",color:"black"}}><em>WELCOME TO LAYERS</em></h1>
                <h5 style={{textAlign:"center",color:"black"}}><em>CRAVE AWAY</em></h5>
            </Grid>
        </Grid>
        <Grid contained> 
        <Carousel className="img">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.wilton.com/dw/image/v2/AAWA_PRD/on/demandware.static/-/Sites-wilton-project-master/default/dwa534218d/images/project/WLRECIP-8754/WLRECIP-8754-petite-chocolate-cake-3.jpg?sw=800&sh=800"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Chocolate Cake</h3>
            <p>Delicious cake with Sprinkles</p>

            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/cupcakes_93722_16x9.jpg"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Cupcakes</h3>
            <p>Vanilla flavoured with fillings inside</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images-gmi-pmc.edge-generalmills.com/cc82a327-e781-4f2b-a841-81c962459649.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Cookies</h3>
            <p>Crispy on the outside and soft from the Inside</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
        </Grid>
        <Grid contained style={{marginTop:"10px"}}>
        <Grid contained>
        </Grid>
        </Grid>
        </div>
     );
}

 
export default LandingPage;