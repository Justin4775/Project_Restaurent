
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default class Login extends React.Component{

    state={
        email : "",
        password : ""
    };
    getemail=(Event)=>{
        this.setState({email:Event.target.value});
    }
    getpassword=(Event)=>{
        this.setState({password:Event.target.value});
    }
    
    login(){
        const logindata = {
            nemail:this.state.email,
            npassword:this.state.password,
        };
        Axios.post("http://localhost:3001/test",logindata).then((response)=>{
            let status = response.data.status;
            let role = response.data.role;
            if (status === "pass")
            {
                if (role === 'customer')
                {
                    window.location.href = "./home";
                }
            }
            else
            {
                alert("E-mail or Password Incorrect");
            }
        });
    }


  render(){
    return(
      <div>
        <div class="container-fluid text-white">
            <div class="row login-main-bg">
                <div class="col-12 d-flex flex-column justify-content-center">
                    <div class="col-12 d-flex flex-row justify-content-center">                        
                        <div class="form-bg w-50 p-3 d-grid gap-3">
                            <div class="d-grid gap-3">
                                <h1 class="text-center text-decoration-underline">Login</h1>
                                <label for="inp1">Email</label>
                                <input id="inp1" type="text" class="form-control" onChange={this.getemail}/>
                                <label for="inp2">Password</label>
                                <input id="inp2" type="password" class="form-control" onChange={this.getpassword}/>
                                <div class="mt-3">
                                    <input id="imp3" type="checkbox"/>
                                    <label class="ms-2" for="imp3">Remember Me</label>
                                </div> 
                                <div class="d-flex flex-row justify-content-center">
                                    <button class="btn btn-primary w-75" onClick={this.login.bind(this)}>Login</button>
                                </div>
                            </div>
                            <div  class="d-flex flex-row">
                                <p>New User?</p>
                                <Link to="/signin">
                                    <a href="#" class="ms-2 text-warning">Signup</a>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}