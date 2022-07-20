import React from 'react';
import Footer from './footer';
import Navbar from './navbar';

export default class OnlineOrder extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                    <div class="welcome">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12 bg-dark p-3 d-md-flex flex-row justify-content-center gap-3">
                                    <h3 class="text-white text-center">Order for Home Delivery, Dine-in, Pick Up</h3>
                                    <center>
                                        <button class="start-order-btn w-50 p-2 m-2 d-md-none">Start Order</button>
                                    </center>
                                    <div class="col-md-2">
                                        <button class="start-order-btn w-100 p-2 d-none d-md-block">Start Order</button>
                                    </div>
                                </div>
                                <div class="12 welcome-bg p-4">
                                    <h1 class="text-center">Welcome To The Kudil !</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="menu">
                        <div class="container-fluid">
                            <div class="row">
                                <h4 class="fw-bold col-12">BROWSE CATEGORIES:</h4>
                                <hr/>
                                <div class="col-12 col-md-6 col-lg-3 flex-row-center">
                                    <div class="varaity-card-bg m-2">                        
                                        <img src={require('../images/2.jpg')} class="w-100 food-varaity-img"/>
                                        <h3 class="text-center m-3">TANDOOR LEG</h3>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3 flex-row-center">
                                    <div class="varaity-card-bg m-2">                        
                                        <img src={require('../images/2.jpg')} class="w-100 food-varaity-img"/>
                                        <h3 class="text-center m-3">TANDOOR LEG</h3>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3 flex-row-center">
                                    <div class="varaity-card-bg m-2">                        
                                        <img src={require('../images/2.jpg')} class="w-100 food-varaity-img"/>
                                        <h3 class="text-center m-3">TANDOOR LEG </h3>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3 flex-row-center">
                                    <div class="varaity-card-bg m-2">                        
                                        <img src={require('../images/2.jpg')} class="w-100 food-varaity-img"/>
                                        <h3 class="text-center m-3">TANDOOR LEG</h3>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3 flex-row-center">
                                    <div class="varaity-card-bg m-2">                        
                                        <img src={require('../images/2.jpg')} class="w-100 food-varaity-img"/>
                                        <h3 class="text-center m-3">TANDOOR LEG</h3>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3 flex-row-center">
                                    <div class="varaity-card-bg m-2">                        
                                        <img src={require('../images/2.jpg')} class="w-100 food-varaity-img"/>
                                        <h3 class="text-center m-3">TANDOOR LEG</h3>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3 flex-row-center">
                                    <div class="varaity-card-bg m-2">                        
                                        <img src={require('../images/2.jpg')} class="w-100 food-varaity-img"/>
                                        <h3 class="text-center m-3">TANDOOR LEG</h3>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3 flex-row-center">
                                    <div class="varaity-card-bg m-2">                        
                                        <img src={require('../images/2.jpg')} class="w-100 food-varaity-img"/>
                                        <h3 class="text-center m-3">TANDOOR LEG</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="offers">
                        <div class="container-fluid">
                            <div class="row">
                                <h4 class="fw-bold text-white mb-3 mt-5">OFFERS AND DEALS:</h4>
                                <hr class="text-white"/>
                                <div class="col-6 col-md-3 text-center offers-div p-3">
                                    <div class="offer-red-bg w-100 h-50 p-3">
                                        <h2>Buy 4 Briyani And Get 1 Free</h2>
                                        <p class="fs-3"></p>
                                    </div>
                                    <div class="w-100 bg-white h-50 p-3">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae fugiat est quae iste.</p>
                                        <a href="#">View Details</a>
                                        <button class="btn btn-outline-danger w-75 mt-3">Redeem</button>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3 text-center offers-div p-3">
                                    <div class="offer-red-bg w-100 h-50 p-3">
                                        <h2>Buy 4 Briyani And Get 1 Free</h2>
                                        <p class="fs-3"></p>
                                    </div>
                                    <div class="w-100 bg-white h-50 p-3">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae fugiat est quae iste.</p>
                                        <a href="#">View Details</a>
                                        <button class="btn btn-outline-danger w-75 mt-3">Redeem</button>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3 text-center offers-div p-3">
                                    <div class="offer-red-bg w-100 h-50 p-3">
                                        <h2>Buy 4 Briyani And Get 1 Free</h2>
                                        <p class="fs-3"></p>
                                    </div>
                                    <div class="w-100 bg-white h-50 p-3">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae fugiat est quae iste.</p>
                                        <a href="#">View Details</a>
                                        <button class="btn btn-outline-danger w-75 mt-3">Redeem</button>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3 text-center offers-div p-3">
                                    <div class="offer-red-bg w-100 h-50 p-3">
                                        <h2>Buy 4 Briyani And Get 1 Free</h2>
                                        <p class="fs-3"></p>
                                    </div>
                                    <div class="w-100 bg-white h-50 p-3">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae fugiat est quae iste.</p>
                                        <a href="#">View Details</a>
                                        <button class="btn btn-outline-danger w-75 mt-3">Redeem</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        );
    }
} 