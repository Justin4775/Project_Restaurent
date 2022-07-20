import React from 'react';
import axios from 'axios';
import AdminNavbar from './admin_navbar';


export default class  TodaysBookings extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        data: []
     }
  }

componentDidMount() {
   axios.get('http://localhost:3001/todays_bookings')
     .then(response => {
         if (response.status === 200 && response != null) 
         {
           this.setState({
                data: response.data
           });
          } 
          else 
          {
            console.log('problem');
          }
})
.catch(error => {
   console.log(error);
});
}

render(){
  const { data } = this.state;
  return <div>
    <header>
      <AdminNavbar/>
    </header>
    <main>
    <table className='table'>
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
    </main>
  </div>
}

}