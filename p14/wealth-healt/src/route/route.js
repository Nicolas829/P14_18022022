import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import EmployeesList from "../page/employeeList";
import CreateEmployees from "../page/createemployee";


const data = [
    {
       
        firstName: '',
        lastName: '',
        startDate: "",
        stateOfBirth: "",
        street: "",
        city: "",
        state: "",
        zipCode:"",
    },
   
]


export default function Routage() {
    
    return(
    <Router>
        <Routes>
                <Route path="" element={<CreateEmployees data={data}/>} />
                <Route path="/list" element={<EmployeesList data={data}/>} />
        </Routes>
    </Router>)
}