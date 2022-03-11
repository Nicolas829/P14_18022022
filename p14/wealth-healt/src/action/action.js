import EmployeesList from "../page/employeeList";
import { EmployeesData, EmployeesDataTransit } from "../redux/reducer/reducer";
import store from "../redux/store/store";

export function saveEmployees() {
   

   const data = {
        firstName:store.getState().firstName,
        lastName:store.getState().lastName,
        dateOfBirth:store.getState().dateOfBirth,
        startDate: store.getState().startDate,        
        street: store.getState().street,
        city: store.getState().city,
        state: store.getState().state,
        zipCode: store.getState().zipCode,
        department: store.getState().department,
       
    }
     
    store.dispatch(EmployeesData(data))
   
   

}