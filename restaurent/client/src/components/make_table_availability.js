import React, { Component } from 'react'
import AdminNavbar from './admin_navbar'

export class MakeTableAvailable extends Component {
  render() {
    return (
      <div>
        <AdminNavbar/>
        <div class="toDo-bg bg-dark p-5 m-3">
                <h1 class="text-white text-center">Make Table Availability</h1>
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

export default MakeTableAvailable