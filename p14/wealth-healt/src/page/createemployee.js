import React from 'react'
import './CreateEmployees.css'
import { useState } from 'react'
import Button from '../component/button'
import { Link } from 'react-router-dom'
import  Modal  from 'react-modal-nico-p14/dist/component/modal'
import InputEmployees from '../component/input'
import InputDatePickerEmployees from '../component/datePicker'

import 'react-dropdown-now/style.css';
import DropDown from '../component/dropdown'




export default function CreateEmployees(props) {
  const data = props.data
  

  const [show, setShow] = useState(false)
  const openModal = () => setShow(true)
  const closeModal = () => setShow(false)
   
  const EmployeesCreation = [
    { label: 'firstName', value:"First name" },
    { label: 'lastName', value: "Last name" },
    { label: 'startDate', value: "Start date" },
    { label: 'dateOfBirth', value: "Date of birth" },
   { label: 'street', value: "Street" },
   { label: 'city', value: "City" },
   { label: 'state', value: "State" },
    { label: 'zipCode', value: "zip Code" },
  {label:"department", value: "Department"}]
 
  let employeesCreationList = EmployeesCreation.map(object => {
    if (object.label === 'dateOfBirth' || object.label === 'startDate')
      return <InputDatePickerEmployees item={object.value} label={object.label} />
    if(object.label==="state"|| object.value ==="Department")return <DropDown item={object.value} label={object.label} />
    else return <InputEmployees item={object.value} label={object.label} key={object.label} />
  }
    
   
    
    )
  
  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
  
      <div className="container">
        <Link to="/list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <div className="create-employee">
          {employeesCreationList}       
          <Button  openModal={openModal} data={data}/>
          <Modal show={show} close={closeModal} text="L'employé a été crée avec succès" />;
        </div>
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </div>
  )
}

