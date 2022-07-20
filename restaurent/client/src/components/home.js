import React from 'react';
import Footer from './footer';
import Navbar from './navbar';
import Img1 from "../images/2.jpg";
import './home.css';




export default class Home extends React.Component{

    render(){
        return(
            <div>
                <Navbar/>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="/images/customer/two.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src="/images/customer/two.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src="/images/customer/three.jpg" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>

                <div class="split-section1 mt-5">
                    <div class="container-fluid">
                        <div class="row">
                            <div class=" col-12 d-md-flex flex-row justify-content-center mb-5 p-3">
                                <div class="col-12 col-md-6 d-flex flex-row justify-content-center">
                                    <img src="/images/customer/home-image-1-1.jpg" class="w-75" alt='...'/>
                                </div>
                                <div class="col-12 col-md-6 text-center p-5">
                                    <h1>Hello</h1>
                                    <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, voluptate adipisci. Similique rerum non reprehenderit eum temporibus quos ipsa minus nostrum. Similique, ratione ut ad inventore tenetur animi corrupti temporibus!</h6>
                                </div>
                                
                            </div>
                            <div class=" col-12 d-md-flex flex-row justify-content-center mb-5 p-3">
                                <div class="col-12 col-md-6 d-flex flex-row justify-content-center order-md-2">
                                    <img src="images/customer/home-image-1-2.jpg" class="w-75" alt='...'/>
                                </div>
                                <div class="col-12 col-md-6 text-center p-5 order-md-1">
                                    <h1>Hello</h1>
                                    <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, placeat itaque libero hic, vel deleniti accusamus iure sed quas eius culpa modi sit soluta, reiciendis adipisci! Officiis laboriosam ex voluptatum!</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class = "split-section2 d-none d-lg-block">
                    <div class="col-12 d-lg-flex flex-row justify-content-center bg-split">
                        <div class="col-3 col-md-6 d-lg-flex flex-row justify-content-center">
                            <img src="/images/customer/split_img.jpg" class="splitImg border border-5 border-white"/>
                        </div>
                                    
                        <div class="w-50 mt-10">
                            <h3>Welcome to</h3>
                            <h1>Kudil Restaurent</h1>
                            <h4 class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quia recusandae suscipit? Aut libero a, iure asperiores illo nihil similique fugiat provident magnam nulla facere voluptatem ea nisi laboriosam repudiandae.</h4>
                        </div>
                    </div>
                    <div class="bg-ad3 d-lg-flex flex-column justify-content-center">
                        <div class="d-lg-flex flex-row justify-content-center mt-15 gap-5 p-3">
                            <div class="col-2 text-white text-center">
                                <i class="fa-solid fa-utensils fs-counter-icon"></i>
                                <h1 class="text-brown">7000+</h1>
                                <hr class="ms-5 me-5"/>
                                <h5>Happy Customers</h5>
                            </div>
                            <div class="col-2 text-white text-center">
                                <i class="fa-solid fa-utensils fs-counter-icon"></i>
                                <h1 class="text-brown">7000+</h1>
                                <hr class="ms-5 me-5"/>
                                <h5>Happy Customers</h5>
                            </div>
                            <div class="col-2 text-white text-center">
                                <i class="fa-solid fa-utensils fs-counter-icon"></i>
                                <h1 class="text-brown">7000+</h1>
                                <hr class="ms-5 me-5"/>
                                <h5>Happy Customers</h5>
                            </div>
                            <div class="col-2 text-white text-center">
                                <i class="fa-solid fa-utensils fs-counter-icon"></i>
                                <h1 class="text-brown">7000+</h1>
                                <hr class="ms-5 me-5"/>
                                <h5>Happy Customers</h5>
                            </div>
                        </div>
                    </div>
                </div>
           
                <div class="container-fluid d-block d-lg-none">
                    <div class="row">
                        <div class="st-grey-div p-5">
                            <div class="flex-row-center">
                                <img src="/images/customer/split_img.jpg" class="w-75 border border-5 border-white" alt="..."/>
                            </div>
                            <div class="text-center mt-3">
                                <h3>Welcome to</h3>
                                <h1>Kudil Restaurent</h1>
                                <h4 class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quia recusandae suscipit? Aut libero a, iure asperiores illo nihil similique fugiat provident magnam nulla facere voluptatem ea nisi laboriosam repudiandae.</h4>
                            </div>
                        </div>
                        
                        <div class="bg-ad3 col-12 d-grid gap-3 p-3">
                            <div class="text-white text-center">
                                <i class="fa-solid fa-utensils fs-counter-icon"></i>
                                <h1 class="text-brown">7000+</h1>
                                <div class="flex-row-center">
                                    <hr class="w-25"/>
                                </div>
                                <h5>Happy Customers</h5>
                            </div>
                            <div class="text-white text-center">
                                <i class="fa-solid fa-utensils fs-counter-icon"></i>
                                <h1 class="text-brown">7000+</h1>
                                <div class="flex-row-center">
                                    <hr class="w-25"/>
                                </div> 
                                <h5>Happy Customers</h5>
                            </div>
                            <div class="text-white text-center">
                                <i class="fa-solid fa-utensils fs-counter-icon"></i>
                                <h1 class="text-brown">7000+</h1>
                                <div class="flex-row-center">
                                    <hr class="w-25"/>
                                </div>
                                <h5>Happy Customers</h5>
                            </div>
                            <div class="text-white text-center">
                                <i class="fa-solid fa-utensils fs-counter-icon"></i>
                                <h1 class="text-brown">7000+</h1>
                                <div class="flex-row-center">
                                    <hr class="w-25"/>
                                </div>
                                <h5>Happy Customers</h5>
                            </div>
                        </div>
                    </div>
                </div>           
                        
                
                <div class="stunning-things-div">
                    <div class="container-fluid mt-5 mb-5">
                        <div class="row">
                            <div class="col-12">
                                <div class="col-12 text-center mb-5">
                                    <h4>For Your Comfort</h4>
                                    <h1>Stunning Things</h1>
                                </div>
                                <div class="col-12 d-md-flex flex-row justify-content-center">
                                    <div class="col-12 col-md-4 p-5">
                                        <div class="d-grid gap-3 p-3 st-grey-div">
                                            <i class="fa fa-solid fa-bowl-rice fs-3"></i>
                                            <h4>High Quality Traditional Food</h4>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti unde ad aperiam, maiores veniam deserunt ipsa accusantium fugit, facilis, recusandae vel nobis veritatis dolore eligendi debitis? Animi, accusamus saepe?</p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 p-5">
                                        <div class="d-grid gap-3 p-3 st-grey-div">
                                            <i class="fa-solid fa-bowl-rice st-icons"></i>
                                            <h4>High Quality Traditional Food</h4>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti unde ad aperiam, maiores veniam deserunt ipsa accusantium fugit, facilis, recusandae vel nobis veritatis dolore eligendi debitis? Animi, accusamus saepe?</p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 p-5">
                                        <div class="d-grid gap-3 p-3 st-grey-div">
                                            <i class="fa-solid fa-bowl-rice st-icons"></i>
                                            <h4>High Quality Traditional Food</h4>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti unde ad aperiam, maiores veniam deserunt ipsa accusantium fugit, facilis, recusandae vel nobis veritatis dolore eligendi debitis? Animi, accusamus saepe?</p>
                                        </div>
                                    </div>
                                </div>
                
                                <div class="col-12 d-md-flex flex-row justify-content-center">
                                    <div class="col-12 col-md-4 p-5">
                                        <div class="d-grid gap-3 p-3 st-grey-div">
                                            <i class="fa-solid fa-bowl-rice st-icons"></i>
                                            <h4>High Quality Traditional Food</h4>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti unde ad aperiam, maiores veniam deserunt ipsa accusantium fugit, facilis, recusandae vel nobis veritatis dolore eligendi debitis? Animi, accusamus saepe?</p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 p-5">
                                        <div class="d-grid gap-3 p-3 st-grey-div">
                                            <i class="fa-solid fa-bowl-rice st-icons"></i>
                                            <h4>High Quality Traditional Food</h4>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti unde ad aperiam, maiores veniam deserunt ipsa accusantium fugit, facilis, recusandae vel nobis veritatis dolore eligendi debitis? Animi, accusamus saepe?</p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 p-5">
                                        <div class="d-grid gap-3 p-3 st-grey-div">
                                            <i class="fa fa-solid fa-bowl-food st-icons"></i>                                          
                                            <h4>High Quality Traditional Food</h4>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti unde ad aperiam, maiores veniam deserunt ipsa accusantium fugit, facilis, recusandae vel nobis veritatis dolore eligendi debitis? Animi, accusamus saepe?</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="home-reservation-bg">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="d-flex flex-row justify-content-center p-5">
                                    <div class="d-grid gap-5 text-center">
                                        <h1 class="text-brown">Enjoy With Family & Friends</h1>
                                        <div class="d-flex flex-row justify-content-center">
                                            <div class="reservation-coupen">
                                                <h1 class="discount-text">25% DISCOUNT</h1>
                                            </div>
                                        </div>
                                        <h6 class="text-white">For Family Parties Use Coupen Code: <span class="text-brown">"FAMILY25"</span></h6>
                                        <h1 class="text-brown make-reservation-text">MAKE RESERVATION</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="event-team-contact-section">
                    <div class="container-fluid">
                        <div class="col-12 d-flex flex-row justify-content-center mt-5">
                            <div class="ad-bg2 d-flex flex-row justify-content-center p-5">
                                <div class="d-grid bg-white text-center p-3">
                                    <h4>Call Our Events Team</h4>
                                    <h6>For further information about our event options, including configuration and menus, email or call our Events team.</h6>
                                    <h4 class="text-brown">+91 9500236700</h4>
                                    <h5 class="text-brown">kudileventreservation@gmail.com</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div class="testimonial-section mt-5">
                    <div class="container-fluid p-3">
                        <div class="row">
                            <div class="col-12 text-center">
                                <h6>TESTIMONIALS</h6>
                                <h1>What Our visitors say</h1>
                            </div>
                            <div class="row row-cols-1 row-cols-md-3 g-3 m-auto">
                                <div class="col">
                                <div class="card h-100">
                                    <img src="./Images/family-having-indian-food.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                                </div>
                                <div class="col">
                                <div class="card h-100">
                                    <img src="./Images/family-having-indian-food (1).jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                                </div>
                                <div class="col">
                                <div class="card h-100">
                                    <img src="./Images/happy-family-havinf-dinner-together.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                    </div>
                                    <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="flex-row-center mt-5">
                                <button class="btn btn-warning">Upload Testimonial</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
} 