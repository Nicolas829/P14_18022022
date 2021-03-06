"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropDown;

var _react = _interopRequireDefault(require("react"));

var _reactDropdownNow = require("react-dropdown-now");

require("react-dropdown-now/style.css");

var _store = _interopRequireDefault(require("../redux/store/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// normal usage
const states = [{
  "name": "Alabama",
  "abbreviation": "AL"
}, {
  "name": "Alaska",
  "abbreviation": "AK"
}, {
  "name": "American Samoa",
  "abbreviation": "AS"
}, {
  "name": "Arizona",
  "abbreviation": "AZ"
}, {
  "name": "Arkansas",
  "abbreviation": "AR"
}, {
  "name": "California",
  "abbreviation": "CA"
}, {
  "name": "Colorado",
  "abbreviation": "CO"
}, {
  "name": "Connecticut",
  "abbreviation": "CT"
}, {
  "name": "Delaware",
  "abbreviation": "DE"
}, {
  "name": "District Of Columbia",
  "abbreviation": "DC"
}, {
  "name": "Federated States Of Micronesia",
  "abbreviation": "FM"
}, {
  "name": "Florida",
  "abbreviation": "FL"
}, {
  "name": "Georgia",
  "abbreviation": "GA"
}, {
  "name": "Guam",
  "abbreviation": "GU"
}, {
  "name": "Hawaii",
  "abbreviation": "HI"
}, {
  "name": "Idaho",
  "abbreviation": "ID"
}, {
  "name": "Illinois",
  "abbreviation": "IL"
}, {
  "name": "Indiana",
  "abbreviation": "IN"
}, {
  "name": "Iowa",
  "abbreviation": "IA"
}, {
  "name": "Kansas",
  "abbreviation": "KS"
}, {
  "name": "Kentucky",
  "abbreviation": "KY"
}, {
  "name": "Louisiana",
  "abbreviation": "LA"
}, {
  "name": "Maine",
  "abbreviation": "ME"
}, {
  "name": "Marshall Islands",
  "abbreviation": "MH"
}, {
  "name": "Maryland",
  "abbreviation": "MD"
}, {
  "name": "Massachusetts",
  "abbreviation": "MA"
}, {
  "name": "Michigan",
  "abbreviation": "MI"
}, {
  "name": "Minnesota",
  "abbreviation": "MN"
}, {
  "name": "Mississippi",
  "abbreviation": "MS"
}, {
  "name": "Missouri",
  "abbreviation": "MO"
}, {
  "name": "Montana",
  "abbreviation": "MT"
}, {
  "name": "Nebraska",
  "abbreviation": "NE"
}, {
  "name": "Nevada",
  "abbreviation": "NV"
}, {
  "name": "New Hampshire",
  "abbreviation": "NH"
}, {
  "name": "New Jersey",
  "abbreviation": "NJ"
}, {
  "name": "New Mexico",
  "abbreviation": "NM"
}, {
  "name": "New York",
  "abbreviation": "NY"
}, {
  "name": "North Carolina",
  "abbreviation": "NC"
}, {
  "name": "North Dakota",
  "abbreviation": "ND"
}, {
  "name": "Northern Mariana Islands",
  "abbreviation": "MP"
}, {
  "name": "Ohio",
  "abbreviation": "OH"
}, {
  "name": "Oklahoma",
  "abbreviation": "OK"
}, {
  "name": "Oregon",
  "abbreviation": "OR"
}, {
  "name": "Palau",
  "abbreviation": "PW"
}, {
  "name": "Pennsylvania",
  "abbreviation": "PA"
}, {
  "name": "Puerto Rico",
  "abbreviation": "PR"
}, {
  "name": "Rhode Island",
  "abbreviation": "RI"
}, {
  "name": "South Carolina",
  "abbreviation": "SC"
}, {
  "name": "South Dakota",
  "abbreviation": "SD"
}, {
  "name": "Tennessee",
  "abbreviation": "TN"
}, {
  "name": "Texas",
  "abbreviation": "TX"
}, {
  "name": "Utah",
  "abbreviation": "UT"
}, {
  "name": "Vermont",
  "abbreviation": "VT"
}, {
  "name": "Virgin Islands",
  "abbreviation": "VI"
}, {
  "name": "Virginia",
  "abbreviation": "VA"
}, {
  "name": "Washington",
  "abbreviation": "WA"
}, {
  "name": "West Virginia",
  "abbreviation": "WV"
}, {
  "name": "Wisconsin",
  "abbreviation": "WI"
}, {
  "name": "Wyoming",
  "abbreviation": "WY"
}];
const department = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"];

function DropDown(props) {
  let title;
  let dispatch;
  let option = [];

  if (props.item === "State") {
    title = props.label;
    dispatch = props.dispatch;
    states.forEach(object => {
      option.push(object.name);
    });
  }

  if (props.item === "Department") {
    title = props.label;
    dispatch = props.dispatch;
    department.forEach(item => option.push(item));
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "box-input-label"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: title
  }, title), /*#__PURE__*/_react.default.createElement(_reactDropdownNow.Dropdown, {
    className: "dropdown",
    placeholder: "Select ".concat(title),
    options: option,
    value: "one",
    onChange: value => _store.default.dispatch(dispatch(value.value)),
    onSelect: value => console.log('selected!', value) // always fires once a selection happens even if there is no change
    ,
    onOpen: () => console.log('open!')
  }));
}