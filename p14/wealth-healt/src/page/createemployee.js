import React from 'react'
import './CreateEmployees.css'
import { useState } from 'react'
import Button from '../component/button'
import { Link } from 'react-router-dom'
import Modal from 'react-modal-nico-p14/dist/component/modal'
import InputEmployees from '../component/input'
import InputDatePickerEmployees from '../component/datePicker'
import 'react-dropdown-now/style.css';
import DropDown from '../component/dropdown'
import store from '../redux/store/store'
import { City, DateOfBirth, Department, FirstName, LastName, StartDate, State, Street, ZipCode } from '../redux/reducer/reducer'
import { saveEmployees } from '../action/action'




export default function CreateEmployees(props) {
  const data = props.data


  const [show, setShow] = useState(false)
  const openModal = () => setShow(true)
  const closeModal = () => setShow(false)

  const EmployeesCreation = [
    { label: 'firstName', value: "First name", dispatch: FirstName, },
    { label: 'lastName', value: "Last name", dispatch: LastName },
    { label: 'startDate', value: "Start date", dispatch: StartDate },
    { label: 'dateOfBirth', value: "Date of birth", dispatch: DateOfBirth },
    { label: 'street', value: "Street", dispatch: Street },
    { label: 'city', value: "City", dispatch: City },
    { label: 'state', value: "State", dispatch: State },
    { label: 'zipCode', value: "zip Code", dispatch: ZipCode },
    { label: "department", value: "Department", dispatch: Department }]



  let employeesCreationList = EmployeesCreation.map(object => {
    if (object.label === 'dateOfBirth' || object.label === 'startDate')
      return <InputDatePickerEmployees item={object.value} label={object.label} dispatch={object.dispatch} />
    if (object.label === "state" || object.value === "Department") return <DropDown item={object.value} dispatch={object.dispatch} label={object.label} />
    else return <InputEmployees item={object.value} label={object.label} key={object.label} dispatch={object.dispatch} />
  }



  )

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
        <Link to="/list" className='view-employee'> <Button className='btn button-view-employee' title="View Current Employees"> </Button> </Link>

      </div>

      <div className="container">

        <h2 >Create Employee</h2>
        <div className="create-employee">
          {employeesCreationList}

          <Button function1={openModal} function2={saveEmployees} data={data} className="btn save" title="save" />
          <Modal show={show} close={closeModal} text="L'employé a été crée avec succès" />
        </div>
      </div>

    </div>
  )
}

