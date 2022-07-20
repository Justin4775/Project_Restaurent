import React from 'react';
import axios from 'axios';
import AdminNavbar from './admin_navbar';


export default class Users extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        data: []
     }
  }

    componentDidMount() {
    axios.get('http://localhost:3001/adminHome')
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
    return <div>
        <AdminNavbar/>
        <table className="table">
        <thead>
        <tr>
            <th>User Name</th>
            <th>Email ID</th>
            <th>Mobile Number</th>
            <th>Address</th>
            <th>Zip</th>
        </tr>
        </thead>
        <tbody>
        {Array.isArray(data) && data.map(object => (
        <tr>
            <td>{object.user_name}</td>
            <td>{object.email_id}</td>
            <td>{object.mobile_no}</td>
            <td>{object.address}</td>
            <td>{object.zip}</td>
        </tr>
        ))}
        </tbody>
        </table>
    </div>
    }

}