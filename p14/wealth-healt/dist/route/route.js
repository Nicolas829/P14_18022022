"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Routage;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _employeeList = _interopRequireDefault(require("../page/employeeList"));

var _createemployee = _interopRequireDefault(require("../page/createemployee"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Routage() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_createemployee.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/list",
    element: /*#__PURE__*/_react.default.createElement(_employeeList.default, null)
  })));
}