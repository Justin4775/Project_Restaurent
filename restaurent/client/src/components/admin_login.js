import React from 'react';
import Axios from 'axios';

export default class AdminLogin extends React.Component{
    state = {
        AdminUserName : "",
        AdminPassword : "",
    }
    getAdminUsername=(Event)=>{
        this.setState({AdminUserName:Event.target.value});
    }
    getAdminPassword=(Event)=>{
        this.setState({AdminPassword:Event.target.value});
    }
    adminLogin(){
        const adminLoginData ={
            nAdminUserName : this.state.AdminUserName,
            nAdminPassword : this.state.AdminPassword
        }
        Axios.post("http://localhost:3001/adminLogin",adminLoginData).then((response)=>{
            let status = response.data.status;
            if (status === "pass")
            {
                window.location.href = "./admin_dashboard";
            }
            else{
                alert("Error");
            }
        });
    }
    render(){
        return(
            <div>
                <div class="container-fluid text-white">
                <div class="row main-bg">
                <div class="col-12 d-flex flex-column justify-content-center">
                    <div class="col-12 d-flex flex-row justify-content-center">                        
                        <div class="form-bg w-50 p-3 d-grid gap-3">
                            <div class="d-grid gap-3">
                                <h1 class="text-center">Admin Login</h1>
                                <label for="inp1">Email / Mobile</label>
                                <input id="inp1" type="text" class="form-control" onChange={this.getAdminUsername}/>
                                <label for="inp2">Password</label>
                                <input id="inp2" type="password" class="form-control" onChange={this.getAdminPassword}/>
                                <div class="mt-5 d-flex flex-row">
                                    <input id="imp3" type="checkbox"/>
                                    <label class="ms-2" for="imp3">Remember Me</label>
                                    {/* <a href='' class="ms-auto text-white text-decoration-none">Create New Account For Admin*</a> */}
                                </div> 
                                <div class="d-flex flex-row justify-content-center">
                                    <button class="btn btn-primary w-75" onClick={this.adminLogin.bind(this)}>Login As Admin</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}