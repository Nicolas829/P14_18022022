import Table from "../component/dataTable";


             

export default function EmployeesList(props) {
     const employees = JSON.parse(localStorage.getItem('employees')) || [];
    console.log(employees)
    return (<Table data={employees} />)
}