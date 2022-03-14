"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZipCode = exports.Street = exports.State = exports.StartDate = exports.ResetState = exports.LastName = exports.FirstName = exports.EmployeesDataSearch = exports.EmployeesData = exports.Department = exports.DateOfBirth = exports.City = void 0;
exports.default = EmployeesReducer;

var _react = _interopRequireDefault(require("react"));

var _immer = _interopRequireDefault(require("immer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FIRSTNAME = 'firstName';
const LASTNAME = 'lastName';
const DATEOFBIRTH = 'dateOfBirth';
const STARTDATE = 'startDate';
const STREET = 'street';
const CITY = 'city';
const STATE = 'state';
const ZIPCODE = 'zipCode';
const DEPARTMENT = 'department';
const EMPLOYEESDATA = "employeesdata";
const EMPLOYEESDATASEARCH = "employeesdatasearch";
const RESETSTATE = "resetstate";

const FirstName = firstName => ({
  type: FIRSTNAME,
  payload: firstName
});

exports.FirstName = FirstName;

const LastName = lastName => ({
  type: LASTNAME,
  payload: lastName
});

exports.LastName = LastName;

const DateOfBirth = dateOfBirth => ({
  type: DATEOFBIRTH,
  payload: dateOfBirth
});

exports.DateOfBirth = DateOfBirth;

const StartDate = startDate => ({
  type: STARTDATE,
  payload: startDate
});

exports.StartDate = StartDate;

const Street = street => ({
  type: STREET,
  payload: street
});

exports.Street = Street;

const City = city => ({
  type: CITY,
  payload: city
});

exports.City = City;

const State = state => ({
  type: STATE,
  payload: state
});

exports.State = State;

const ZipCode = zipCode => ({
  type: ZIPCODE,
  payload: zipCode
});

exports.ZipCode = ZipCode;

const Department = department => ({
  type: DEPARTMENT,
  payload: department
});

exports.Department = Department;

const EmployeesData = data => ({
  type: EMPLOYEESDATA,
  payload: data
});

exports.EmployeesData = EmployeesData;

const EmployeesDataSearch = dataSearch => ({
  type: EMPLOYEESDATASEARCH,
  payload: dataSearch
});

exports.EmployeesDataSearch = EmployeesDataSearch;

const ResetState = () => ({
  type: RESETSTATE,
  payload: ""
});

exports.ResetState = ResetState;
const initialState = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  startDate: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  department: "",
  data: [],
  dataSearch: []
};

function EmployeesReducer() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _immer.default)(state, draft => {
    switch (action.type) {
      case FIRSTNAME:
        {
          draft.firstName = action.payload;
          return;
        }

      case LASTNAME:
        {
          draft.lastName = action.payload;
          return;
        }

      case DATEOFBIRTH:
        {
          draft.dateOfBirth = action.payload;
          return;
        }

      case STARTDATE:
        {
          draft.startDate = action.payload;
          return;
        }

      case STREET:
        {
          draft.street = action.payload;
          return;
        }

      case CITY:
        {
          draft.city = action.payload;
          return;
        }

      case STATE:
        {
          draft.state = action.payload;
          return;
        }

      case ZIPCODE:
        {
          draft.zipCode = action.payload;
          return;
        }

      case DEPARTMENT:
        {
          draft.department = action.payload;
          return;
        }

      case EMPLOYEESDATA:
        {
          draft.data.push(action.payload);
          return;
        }

      case EMPLOYEESDATASEARCH:
        {
          console.log(action.payload);
          draft.dataSearch = action.payload;
          return;
        }

      case RESETSTATE:
        {
          draft.firstName = "";
          draft.lastName = "";
          draft.dateOfBirth = "";
          draft.startDate = "";
          draft.street = "";
          draft.city = "";
          draft.state = "";
          draft.zipCode = "";
          draft.department = "";
          return;
        }

      default:
    }
  });
}