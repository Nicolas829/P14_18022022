import EmployeesList from "../page/employeeList";
import store from "../redux/store/store";

export function saveEmployees(data) {
    console.log(data)
  
    const employees = JSON.parse(data);
    
    employees.push(store.getState());  
    console.log(employees)
    data=employees
    
   
    console.log('data', data)
    //sessionStorage.clear()
    //localStorage.setItem('employees', JSON.stringify(employees));
     //localStorage.clear()
}