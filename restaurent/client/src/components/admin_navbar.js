import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {Link,NavLink} from 'react-router-dom';

export default class AdminNavbar extends React.Component{
    state = {
        isLoggedIn : true
    };
    render(){
        const {isLoggedIn} = this.state
        return(
            <div class="navbar-position">
                <nav class="navbar navbar-expand-md navbar-dark bg-dark p-3">
                    <a class="navbar-brand text-decoration-underline fs-3" href="#">KUDIL</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav m-auto gap-3">
                            <NavLink className="navText" to = "/adminhome">Home</NavLink>
                            <NavLink className="navText" to = "/adminUsers">Users</NavLink>
                            <NavLink className="navText" to = "/admin_table_availability">Table Reservation</NavLink>
                        </div>
                        <div class="ml-auto d-none d-md-block">
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
                        <div class="ml-auto me-5 d-block d-md-none mt-5">
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
