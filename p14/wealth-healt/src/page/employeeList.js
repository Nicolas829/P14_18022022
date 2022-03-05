import Table from "../component/dataTable";


             

export default function EmployeesList(props) {
    const employees = JSON.parse(props.data);
    
    console.log(employees)
    return (<Table data={employees} />)
}