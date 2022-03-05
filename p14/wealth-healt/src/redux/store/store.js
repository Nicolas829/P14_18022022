import { combineReducers, createStore } from 'redux'
import EmployeesReducer from '../reducer/reducer'



const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(EmployeesReducer, reduxDevtools)

export default store