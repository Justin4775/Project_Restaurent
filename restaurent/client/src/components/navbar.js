import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {Link,NavLink} from 'react-router-dom';

export default class Navbar extends React.Component{
    state = {
        isLoggedIn : false
    };
    render(){
        const {isLoggedIn} = this.state
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                    <a class="navbar-brand ms-5" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav m-auto gap-3">
                        <NavLink className="navText" to = "/home">Home</NavLink>
                        <NavLink className="navText" to = "/menu">Menu</NavLink>
                        <NavLink className="navText" to = "/reservation">Reservation</NavLink>
                        <NavLink className="navText" to = "/Online_order">Order Online</NavLink>
                    </div>
                    <div class="ml-auto me-5 d-none d-lg-block">
                        {isLoggedIn &&
                            <Link to = "/login">
                                <button class="btn btn-outline-secondary" ><i class="fa-solid fa-right-to-bracket"></i>Login</button>
                            </Link>
                        }
                        {!isLoggedIn &&
                            <Link to = "/login">
                                <button class="btn btn-outline-secondary" ><i class="fa-solid fa-right-to-bracket"></i>Log Out</button>
                            </Link>
                        }
                    </div>
                    <div class="ml-auto me-5 d-block d-lg-none mt-5">
                        {isLoggedIn &&
                            <Link to = "/login">
                                <button class="btn btn-outline-secondary" ><i class="fa-solid fa-right-to-bracket"></i>Login</button>
                            </Link>
                        }
                        {!isLoggedIn &&
                            <Link to = "/login">
                                <button class="btn btn-outline-secondary" ><i class="fa-solid fa-right-to-bracket"></i>Log Out</button>
                            </Link>
                        }
                    </div>
                    </div>
                </nav>
            </div>
        );
    }
} 