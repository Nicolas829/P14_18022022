"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InputDatePickerEmployees;

require("core-js/modules/web.dom-collections.iterator.js");

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

var _react = _interopRequireWildcard(require("react"));

require("react-datepicker/dist/react-datepicker.css");

var _esm = require("date-fns/esm");

var _store = _interopRequireDefault(require("../redux/store/store"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InputDatePickerEmployees(props) {
  const [startDate, setStartDate] = (0, _react.useState)(new Date());
  const item = props.item;
  const title = props.label;
  const dispatch = props.dispatch;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "box-input-label"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: item
  }, item), /*#__PURE__*/_react.default.createElement("div", {
    className: "container-datepicker"
  }, /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    className: "main-container-datepicker",
    selected: startDate,
    onChange: date => {
      setStartDate(date);
      let newDate = (0, _esm.format)(date, "dd-MM-yyyy");

      _store.default.dispatch(dispatch(newDate));
    },
    shpeekNextMonth: true,
    showMonthDropdown: true,
    showYearDropdown: true,
    dropdownMode: "select",
    withPortal: true,
    portalId: "root-portal",
    isClearable: true
  })));
}