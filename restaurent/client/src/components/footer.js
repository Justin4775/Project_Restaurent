import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
            <div>
                <div class="contact-us-section">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="text-white d-md-flex flex-row justify-content-center gap-3">
                                <div class="col-12 col-md-3 d-block d-md-none">
                                    <h2 class="text-decoration-underline text-center">Kudil</h2>
                                </div>
                                <div class="col-12 col-lg-3 p-3 me-auto">
                                    <h5 class="mb-3 text-center">Follow Us On: </h5>
                                    <div class="flex-row-center gap-5">
                                        <i class ="fa fa-brands fa-facebook-f fs-3"></i>
                                        <i class ="fa fa-brands fa-twitter fs-2"></i>
                                        <i class ="fa fa-brands fa-instagram fs-2"></i>
                                    </div>
                                </div>
                                <div class="col-12 col-md-2 d-none d-md-block mt-3">
                                    <h2 class="text-decoration-underline text-center">Kudil</h2>
                                </div>
                                <div class="col-12 col-md-3 p-3 ms-auto mt-3">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control bg-transparent" placeholder="Enter Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span class="input-group-text bg-transparent" id="basic-addon2"><i class="fa fa-solid fa-paper-plane text-white"></i></span>
                                    </div>
                                </div>
                            </div>

                            <hr class="text-white"/>
                            
                            <div class="d-md-flex flex-row justify-content-center text-white p-3 mt-3 col-12">
                                <div class="col-12 col-md-3 text-center d-grid gap-3 p-5 text-white">
                                    <h2>Address</h2>
                                    <h6>Kalapatti Main Rd, Coimbatore,</h6> 
                                    <h6>Tamil Nadu 641035</h6>
                                </div>
                                <div class="verticalLine d-none d-md-block"></div>
                                <div class="col-12 col-md-3 text-center d-grid gap-3 p-5 text-white">
                                    <h2>Restaurent Timing</h2>
                                    <h5>Mon - Fri<br/>7AM - 10PM<br/>(Breakfast - Lunch - Dinner)</h5>
                                </div>
                                <div class="verticalLine d-none d-md-block"></div>
                                <div class="col-12 col-md-3 text-center d-grid gap-3 p-5 text-white">
                                    <h2>Contact Us</h2>
                                    <a href="#" class="text-white text-decoration-none">kudilrestaurentscbe@gmail.com</a>
                                    <h6>+91 9500236700</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="footer p-3">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12 text-center text-white">
                                <h6><i class="fa fa-regular fa-copyright me-3"></i>Created By Justin</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 