import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
import Axios from 'axios';

export default class Signin extends React.Component{
    state={
        fullname : "",
        email : "",
        // password : "",
        mobile : "",
        address:"",
        pin:""
    };
    getFullname=(Event)=>{
        this.setState({fullname:Event.target.value})
    }
    getEmail=(Event)=>{
        this.setState({email:Event.target.value});
    }
    // getPassword=(Event)=>{
    //     this.setState({password:Event.target.value});
    // }
    getMobile=(Event)=>{
        this.setState({mobile:Event.target.value});
    }
    getAddress=(Event)=>{
        this.setState({address:Event.target.value});
    }
    getPin=(Event)=>{
        this.setState({pin:Event.target.value});
    }
    
    signin(){
        const signindata = {
           nFullname:this.state.fullname,
           nEmail:this.state.email,
           nMobile:this.state.mobile,
           nAddress:this.state.address,
           nPin:this.state.pin
        };
        Axios.post("http://localhost:3001/sign",signindata).then((response)=>{
            if(response.data.status1 === "Error")
            {
                console.log("Error");
            }
            else
            {
                window.location.href ="./login";
            }
        })
        };
    


    render(){
        return(
          <div>
            <div class="container-fluid text-white">
                <div class="row main-bg">
                    <div class="col-12 d-flex flex-column justify-content-center">
                        <div class="col-12 d-flex flex-row justify-content-center">                        
                            <div class="form-bg col-11 col-lg-6 d-grid gap-3">
                                <form class="d-grid gap-3">
                                    <h1 class="text-center">Sign up</h1>
                                    <label for="fullname">Full Name</label>
                                    <input id="fullname" type="text" class="form-control" onChange={this.getFullname} required/>
                                    <label for="email">E-mail</label>
                                    <input id="email" type="text" class="form-control" onChange={this.getEmail} required/>
                                    {/* <label for="password1">Create Password</label>
                                    <input id="password1" type="password" class="form-control"/>
                                    <label for="password2">Re-Enter Password</label>
                                    <input id="password2" type="password" class="form-control" onChange={this.getPassword}/> */}
                                    <label for="mobile">Mobile</label>
                                    <input id="mobile" type="text" class="form-control" maxLength={10} onChange={this.getMobile} required/> 
                                    <label for="address">Address</label>
                                    <textarea id="address" type="text" class="addressfieldheight" onChange={this.getAddress} required/>
                                    <label for="zip">Pin / Zip Code</label>
                                    <input id="zip" type="text" class="form-control w-25" maxLength={6} onChange={this.getPin} required/> 
                                    <div class="d-flex flex-row justify-content-center">
                                        <button class="btn btn-primary w-75"  onClick={this.signin.bind(this)}>Sign Up</button>
                                    </div>
                                </form>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
      }
    }