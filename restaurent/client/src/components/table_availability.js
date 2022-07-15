import React from 'react';
import AdminNavbar from './admin_navbar';

export default class TableAvailability extends React.Component{
    render(){
        return(
            <div>
            <AdminNavbar/>
            <div class="toDo-bg bg-dark p-5">
                <h1 class="text-white">Make Table Availability</h1>
                <div class="flex-row-center gap-3 mt-5">
                    <input type="text" class="form-control w-25"/>
                    <input type="text" class="form-control w-25"/>
                    <input type="text" class="form-control w-25"/>
                    <button class="btn btn-primary">Add Table</button>
                </div>
            </div>
            </div>
        )
    }
}