import React from 'react'
import './CreateEmployees.css'
import { useState } from 'react'

import  Modal  from 'react-modal-nico-p14/dist/component/modal'



window.addEventListener("load", (() => { localStorage.removeItem('lastName') }))
export default function CreateEmployees() {console.log(localStorage.firstName)

  const [show, setShow] = useState(false)
 
  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
  
      <div className="container">
        <a href="employee-list.html">View Current Employees</a>

        <h2>Create Employee</h2>

        <div className="create-employee">
          <div className="box-input-label">
            <input type="text" id="first-name" onChange={(e) =>localStorage.setItem("firstName", e.target.value)} />
            <label className="first-name">First Name</label>
            <span className='box'></span>
          </div>
          <div className="box-input-label">
            <input type="text" id="last-name" onChange={(e) =>localStorage.setItem("lastName", e.target.value)} />
            <label className="last-name">Last Name</label>
          </div>

          <div className="box-input-label">
            <input id="start-date" type="text" onChange={(e) =>localStorage.setItem("startDate", e.target.value)} />
            <label className="start-date">Start Date</label>
          </div>
          <div className="box-input-label">
            <input id="date-of-birth" type="text" onChange={(e) =>localStorage.setItem("dateOfBirth", e.target.value)} />
            <label className="date-of-birth">Date of Birth</label>
          </div>

          <fieldset className="address">
            <legend>Address</legend>

            <div className="box-input-label">
              <input id="street" type="text" onChange={(e) =>localStorage.setItem("street", e.target.value)} />
              <label className="street">Street</label>
            </div>
            <div className="box-input-label">
              <input id="city" type="text" onChange={(e) =>localStorage.setItem("city", e.target.value)} />
              <label className="city">City</label>
            </div>
            <div className="box-input-label">
              <select name="state" id="state" onChange={(e) =>localStorage.setItem("state", e.target.value)}></select>
              <label className="state">State</label>
            </div>
            <div className="box-input-label">
              <input id="zip-code" type="number" onChange={(e) =>localStorage.setItem("zipCode", e.target.value)} />
              <label className="zip-code">Zip Code</label>
            </div>
          </fieldset>
          <button className="btn" onClick={((e) => {
            if (localStorage.firstName != undefined && localStorage.lastName != undefined) {
              
              setShow(!show)
            }
           
          })}    >Save</button> <Modal show={show} fontSize="2em" text="L'employé a été crée avec succès" fontSize="40" height="200" textTop="50" textLeft="100" borderRadius="25px"/>;
        </div>
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </div>
  )
}

