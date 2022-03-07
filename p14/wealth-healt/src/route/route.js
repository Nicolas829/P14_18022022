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



export default function Routage() {
    
    return(
    <Router>
        <Routes>
                <Route path="" element={<CreateEmployees />} />
                <Route path="/list" element={<EmployeesList />} />
        </Routes>
    </Router>)
}