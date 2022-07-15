import React from 'react';
import Footer from './footer';
import Navbar from './navbar';

export default class Menu extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <h1>Customer Menu Galary</h1>
                <Footer/>
            </div>
        );
    }
} 