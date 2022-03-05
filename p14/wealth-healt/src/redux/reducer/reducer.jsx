import produce from 'immer'



const FIRSTNAME = 'firstName'
const LASTNAME = 'lastName'
const DATEOFBIRTH = 'dateOfBirth'
const STARTDATE = 'startDate'
const STREET = 'street'
const CITY = 'city'
const STATE = 'state'
const ZIPCODE = 'zipCode'
const DEPARTMENT = 'department'


export const FirstName= (firstName) => ({
  type: FIRSTNAME,
  payload: firstName,
})
export const LastName= (lastName) => ({
  type:LASTNAME,
  payload: lastName,
})
export const DateOfBirth= (dateOfBirth) => ({
  type: DATEOFBIRTH,
  payload: dateOfBirth,
})
export const StartDate= (startDate) => ({
  type: STARTDATE,
  payload: startDate,
})
export const Street= (street) => ({
  type: STREET,
  payload: street,
})
export const City= (city) => ({
  type: CITY,
  payload: city,
})
export const State= (state) => ({
  type: STATE,
  payload: state,
})
export const ZipCode= (zipCode) => ({
  type: ZIPCODE,
  payload: zipCode,
})
export const Department= (department) => ({
  type: DEPARTMENT,
  payload: department,
})

const initialState = {
        firstName: "",
        lastName:"",
        dateOfBirth: "",
        startDate: "",        
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: "",
}

export default function EmployeesReducer(state = initialState, action) {
  return produce(state, (draft) => {
      switch (action.type) {
          case FIRSTNAME: {
              draft.firstName = action.payload
        
              return
          }
          case LASTNAME: {
              draft.lastName = action.payload
        
              return
          }
          case DATEOFBIRTH: {
              draft.dateOfBirth = action.payload
        
              return
          }
            
          case STARTDATE: {
              draft.startDate = action.payload
        
              return
          }
          case STREET: {
              draft.street = action.payload
        
              return
          }
          case CITY: {
              draft.city = action.payload
        
              return
          }
          case STATE: {
              draft.state = action.payload
        
              return
          }
          case ZIPCODE: {
              draft.zipCode = action.payload
        
              return
          }
          case DEPARTMENT: {
              draft.department = action.payload
        
              return
          }
            default:
          
        }
  })
}
