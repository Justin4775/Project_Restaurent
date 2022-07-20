import React from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from './admin_navbar';
import axios from 'axios';

export default class TableAvailability extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           data: []
        }
     }

       componentDidMount() {
       axios.get('http://localhost:3001/admin_table_availability')
           .then(response => {
               if (response.status === 200 && response != null) {
               this.setState({
                       data: response.data
               });
           } else {
           console.log('problem');
           }
       })
       .catch(error => {
       console.log(error);
       });
       }
   
    render(){
        const { data } = this.state;


        return(
            <div>
            <AdminNavbar/>
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='row flex-row-center gap-5'>
                        <Link to = "/todays_bookings" className="text-decoration-none  col-5">
                            <div className='bg-dark text-center p-5'>
                                <h1 className='text-white no-underline fs-1'>Total Bookings Today</h1>
                            </div>
                        </Link>
                        <Link to = "/todays_bookings" className="text-decoration-none  col-5">
                            <div className='bg-dark text-center p-5'>
                                <h1 className='text-white no-underline fs-1'>Lock Table</h1>
                            </div>
                        </Link>
                        <Link to = "/make_table_availability" className="text-decoration-none  col-5">
                            <div className='bg-dark text-center p-5'>
                                <h1 className='text-white no-underline fs-1'>Make Table Availability</h1>
                            </div>
                        </Link>
                        <Link to = "/todays_bookings" className="text-decoration-none  col-5">
                            <div className='bg-dark text-center p-5'>
                                <h1 className='text-white no-underline fs-1'>Unlock Table</h1>
                            </div>
                        </Link>
                    </div>
                    <div className='flex-row-center mt-5'>
                        <h1 className='bg-secondary col-12 text-center p-3'>All Bookings</h1>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th>Location</th>
                    <th>Visit Date</th>
                    <th>Visit Time</th>
                    <th>Number Of People</th>
                    <th>Username</th>
                    <th>Contact Number</th>
                </tr>
                </thead>
                <tbody>
                {Array.isArray(data) && data.map(object => (
                <tr>
                    <td>{object.location}</td>
                    <td>{object.visit_date}</td>
                    <td>{object.visit_time}</td>
                    <td>{object.num_of_people}</td>
                    <td>{object.username}</td>
                    <td>{object.contact_number}</td>
                </tr>
                ))}
                </tbody>
            </table>
            </div>
        )
    }
}