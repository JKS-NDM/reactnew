import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";


class ListEmployeeComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                 <h2 className="text-center">Employees List</h2>
                 <div className = "row">
                    <button className="btn btn-primary"> Add Employee</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                 
                                     
                                         
                                        <tr >
                                             <td>  </td>   
                                             <td>  </td>
                                             <td> </td>
                                             <td>
                                                 <button className="btn btn-info">Update </button>
                                                 <button className="btn btn-danger">Delete </button>
                                                 <button className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                   
                               
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListEmployeeComponent();