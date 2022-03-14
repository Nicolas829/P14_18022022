"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InputEmployees;

var _react = _interopRequireDefault(require("react"));

var _store = _interopRequireDefault(require("../redux/store/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InputEmployees(props) {
  const item = props.item;
  const label = props.label;
  const dispatch = props.dispatch;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "box-input-label"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: item
  }, item), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: item,
    onChange: e => _store.default.dispatch(dispatch(e.target.value))
  }));
}