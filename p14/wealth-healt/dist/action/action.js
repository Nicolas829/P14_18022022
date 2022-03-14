"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveEmployees = saveEmployees;

var _react = _interopRequireDefault(require("react"));

var _reducer = require("../redux/reducer/reducer");

var _store = _interopRequireDefault(require("../redux/store/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function saveEmployees() {
  const data = {
    firstName: _store.default.getState().firstName,
    lastName: _store.default.getState().lastName,
    dateOfBirth: _store.default.getState().dateOfBirth,
    startDate: _store.default.getState().startDate,
    street: _store.default.getState().street,
    city: _store.default.getState().city,
    state: _store.default.getState().state,
    zipCode: _store.default.getState().zipCode,
    department: _store.default.getState().department
  };

  _store.default.dispatch((0, _reducer.EmployeesData)(data));

  _store.default.dispatch((0, _reducer.ResetState)());
}