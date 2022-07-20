import React from 'react';
import Footer from './footer';
import Navbar from './navbar';
import Axios from 'axios';


export default class Reservation extends React.Component{
    state = {
        Location:"",
        DayOfVisit:"",
        TimeOfVisit:"",
        NoOfPeople:"",
        UserName:"",
        ContactNumber:""
    };
    getLocation=(Event)=>{
        this.setState({Location:Event.target.value});
    }
    getDayOfVisit=(Event)=>{
        this.setState({DayOfVisit:Event.target.value});
    }
    getTimeOfVisit=(Event)=>{
        this.setState({TimeOfVisit:Event.target.value});
    }
    getNoOfPeople=(Event)=>{
        this.setState({NoOfPeople:Event.target.value});
    }
    getUserName=(Event)=>{
        this.setState({UserName:Event.target.value});
    }
    getContactNumber=(Event)=>{
        this.setState({ContactNumber:Event.target.value});
    }


    availability(){

    }

    bookTable(){
        const reservationdata = {
            nLocation:this.state.Location,
            nDayOfVisit:this.state.DayOfVisit,
            nTimeOfVisit:this.state.TimeOfVisit,
            nNoOfPeople:this.state.NoOfPeople,
            nUserName:this.state.UserName,
            nContactNumber:this.state.ContactNumber
        };
        console.log(reservationdata.nLocation);
        console.log(reservationdata.nDayOfVisit);
        console.log(reservationdata.nTimeOfVisit);
        console.log(reservationdata.nNoOfPeople);
        console.log(reservationdata.nUserName);
        console.log(reservationdata.nContactNumber);
    
    Axios.post("http://localhost:3001/reserve",reservationdata).then((response)=>{
        console.log(response);
    })
    };


    render(){
        return(
            <div>
                <Navbar/>
                <div class="container-fluid">
                    <div class="row">
                        <div class="reservation-bg black-gradient">
                            <h1 class=" col-12 text-center text-white mt-5">Make A <span class="text-brown">Reservation</span></h1>
                            <div class="flex-row-center p-5">
                                <img src="/images/customer/reservation-min.jpg" class="col-5 d-none d-lg-block" alt="..."/>
                                        
                                <div class="col-12 col-lg-5 flex-row-center bg-white p-3">
                                    <form>
                                        <h2 class="text-brown">Let Us Serve You Better</h2>
                                        <h6 class="mb-5">Don't wait in a line to enjoy your meal. Reserve a table in advance with us.</h6>
                                        <label for="floatingSelectGrid" class="mb-3">Location :</label>
                                        <select class="form-select mb-3" id="floatingSelectGrid" aria-label="Floating label select example" onChange={this.getLocation}>
                                            <option selected>Select Location</option>
                                            <option value="1">Coimbatore</option>
                                            <option value="2">Tirupur</option>
                                            <option value="3">Erode</option>
                                        </select>
                                        
                                        <div class="mb-3">
                                            <label for="dateInput" class="mb-2">Day Of Visti :</label>
                                            <input type="date" id="dateInput" class="form-control" onChange={this.getDayOfVisit}></input>
                                        </div>

                                        <div class="mb-3">
                                            <label for="timeInput" class="mb-2">Time Of Visti :</label>
                                            <input type="time" id="timeInput" class="form-control" onChange={this.getTimeOfVisit}></input>
                                        </div>

                                        <div class="mb-3">
                                            <label for="noOfPeople" class="mb-2">Enter Number Of People :</label>
                                            <input type="text" id="noOfPeople" class="form-control" onChange={this.getNoOfPeople}></input>
                                        </div>

                                        <div class="mb-3">
                                            <label for="userNameInput" class="mb-2">Enter Username :</label>
                                            <input type="text" id="userNameInput" class="form-control" onChange={this.getUserName}></input>
                                        </div>

                                        <div class="mb-3">
                                            <label for="contactInput" class="mb-2">Enter Contact Number :</label>
                                            <input type="text" id="contactInput" class="form-control" onChange={this.getContactNumber}></input>
                                        </div>
                                    
                                        <div class="flex-row-center mt-5">
                                            <button class="reserve-table-btn" onClick={this.bookTable.bind(this)}>Reserve Table</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <div class="availability bg-secondary p-3">
                            <h1 class="text-center">
                                Available Tables & Chairs
                            </h1>
                        </div> */}
                        <div class="mt-5 p-5">
                            <h1 class="text-center mb-5">Private Dinning & Events</h1>
                            <div class="flex-row-center gap-5">
                                <div class="col-4 text-center p-3 m-5">
                                    <h1 class="mb-5 text-brown">Find A Party Area</h1>
                                    <p class="fs-5">When while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among. the tall grass by the trickling stream.</p>
                                    <button class="reserve-table-btn mt-5">Contact</button>
                                </div>
                                <div class="col-5">
                                    <img src="./images/customer/image02.jpg" class="" alt="..."/>
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