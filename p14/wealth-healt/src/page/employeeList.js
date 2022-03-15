import { Link } from "react-router-dom";
import Button from "../component/button";
import Table from "../component/dataTable";
import React from "react";




export default function EmployeesList(props) {


  return (<div>

    <Table />
    <Link to='/' className="link-return"> <Button title="retour à la création d'employé" className="btn return" />
    </Link >
  </div>
  )
}