"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EmployeesList;

var _reactRouterDom = require("react-router-dom");

var _button = _interopRequireDefault(require("../component/button"));

var _dataTable = _interopRequireDefault(require("../component/dataTable"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EmployeesList(props) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_dataTable.default, null), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "link-return"
  }, " ", /*#__PURE__*/_react.default.createElement(_button.default, {
    title: "retour \xE0 la cr\xE9ation d'employ\xE9",
    className: "btn return"
  })));
}