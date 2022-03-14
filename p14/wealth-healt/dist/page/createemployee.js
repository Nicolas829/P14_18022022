"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CreateEmployees;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./CreateEmployees.css");

var _button = _interopRequireDefault(require("../component/button"));

var _reactRouterDom = require("react-router-dom");

var _modal = _interopRequireDefault(require("react-modal-nico-p14/dist/component/modal"));

var _input = _interopRequireDefault(require("../component/input"));

var _datePicker = _interopRequireDefault(require("../component/datePicker"));

require("react-dropdown-now/style.css");

var _dropdown = _interopRequireDefault(require("../component/dropdown"));

var _store = _interopRequireDefault(require("../redux/store/store"));

var _reducer = require("../redux/reducer/reducer");

var _action = require("../action/action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function CreateEmployees(props) {
  const data = props.data;
  const [show, setShow] = (0, _react.useState)(false);

  const openModal = () => setShow(true);

  const closeModal = () => setShow(false);

  const EmployeesCreation = [{
    label: 'firstName',
    value: "First name",
    dispatch: _reducer.FirstName
  }, {
    label: 'lastName',
    value: "Last name",
    dispatch: _reducer.LastName
  }, {
    label: 'startDate',
    value: "Start date",
    dispatch: _reducer.StartDate
  }, {
    label: 'dateOfBirth',
    value: "Date of birth",
    dispatch: _reducer.DateOfBirth
  }, {
    label: 'street',
    value: "Street",
    dispatch: _reducer.Street
  }, {
    label: 'city',
    value: "City",
    dispatch: _reducer.City
  }, {
    label: 'state',
    value: "State",
    dispatch: _reducer.State
  }, {
    label: 'zipCode',
    value: "zip Code",
    dispatch: _reducer.ZipCode
  }, {
    label: "department",
    value: "Department",
    dispatch: _reducer.Department
  }];
  let employeesCreationList = EmployeesCreation.map(object => {
    if (object.label === 'dateOfBirth' || object.label === 'startDate') return /*#__PURE__*/_react.default.createElement(_datePicker.default, {
      item: object.value,
      label: object.label,
      dispatch: object.dispatch
    });
    if (object.label === "state" || object.value === "Department") return /*#__PURE__*/_react.default.createElement(_dropdown.default, {
      item: object.value,
      dispatch: object.dispatch,
      label: object.label
    });else return /*#__PURE__*/_react.default.createElement(_input.default, {
      item: object.value,
      label: object.label,
      key: object.label,
      dispatch: object.dispatch
    });
  });
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "HRnet"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/list",
    className: "view-employee"
  }, " ", /*#__PURE__*/_react.default.createElement(_button.default, {
    className: "btn button-view-employee",
    title: "View Current Employees"
  }, " "), " ")), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Create Employee"), /*#__PURE__*/_react.default.createElement("div", {
    className: "create-employee"
  }, employeesCreationList, /*#__PURE__*/_react.default.createElement(_button.default, {
    function1: openModal,
    function2: _action.saveEmployees,
    data: data,
    className: "btn save",
    title: "save"
  }), /*#__PURE__*/_react.default.createElement(_modal.default, {
    show: show,
    close: closeModal,
    text: "L'employ\xE9 a \xE9t\xE9 cr\xE9e avec succ\xE8s"
  }))));
}