
import './App.css';
import React from 'react';
import Login from './components/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import Menu from './components/menu';
import Reservation from './components/reservation';
import OnlineOrder from './components/OnlineOrder';
import Signin from './components/signin';
import Server from './components/server';
import Cook from './components/cook';
import AdminLogin from './components/admin_login';
import AdminDashboard from './components/admin_dashboard';
import TableAvailability from './components/table_availability';







export default class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route path = "/login" element = {<Login/>}/>
            <Route index element = {<Home/>}/>
            <Route path = "/home" element = {<Home/>}/>
            <Route path = "/menu" element = {<Menu/>}/>
            <Route path = "/Online_order" element = {<OnlineOrder/>}/>
            <Route path = "/reservation" element = {<Reservation/>}/>
            <Route path = "/signin" element = {<Signin/>}/>
            <Route path = "/server" element = {<Server/>}/>
            <Route path = "/cook" element = {<Cook/>}/>
            <Route path = "/admin_login" element = {<AdminLogin/>}/>
            <Route path = "/admin_dashboard" element = {<AdminDashboard/>}/>
            <Route path = "/table_availability" element = {<TableAvailability/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
