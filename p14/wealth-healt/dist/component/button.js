"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireDefault(require("react"));

var _action = require("../action/action");

var _store = _interopRequireDefault(require("../redux/store/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(props) {
  const openModal = () => props.openModal();

  const function1 = () => {
    if (props.function1) {
      props.function1();
    }
  };

  const function2 = () => {
    if (props.function2) {
      props.function2();
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container-".concat(props.className)
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn save",
    onClick: e => {
      if (function1 !== "") {
        function1();
      }

      function2(props.data);
    }
  }, props.title));
}