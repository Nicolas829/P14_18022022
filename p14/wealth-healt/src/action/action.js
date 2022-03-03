export function saveEmployees() {
    console.log(sessionStorage)
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = {
        firstName: sessionStorage.firstName,
        lastName:sessionStorage.lastName,
        dateOfBirth: sessionStorage.dateOfBirth,
        startDate: sessionStorage.startDate,        
        street: sessionStorage.street,
        city: sessionStorage.city,
        state: sessionStorage.state,
        zipCode: sessionStorage.zipCode,
        department: sessionStorage.department,
    };
    employees.push(employee);  
   
    sessionStorage.clear()
    localStorage.setItem('employees', JSON.stringify(employees));
     //localStorage.clear()
}