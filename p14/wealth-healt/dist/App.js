"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EmployeesWealthHealth;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");

var _reactRedux = require("react-redux");

var _store = _interopRequireDefault(require("./redux/store/store"));

var _route = _interopRequireDefault(require("./route/route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EmployeesWealthHealth() {
  return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: _store.default
  }, /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_route.default, null)));
}