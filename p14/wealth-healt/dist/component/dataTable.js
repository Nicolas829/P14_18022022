"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Table;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireWildcard(require("react"));

var _reactDataTableComponent = _interopRequireDefault(require("react-data-table-component"));

var _store = _interopRequireDefault(require("../redux/store/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const columns = [{
  name: 'First Name',
  selector: row => row.firstName,
  sortable: true
}, {
  name: 'Last Name',
  selector: row => row.lastName,
  sortable: true
}, {
  name: 'Start Date',
  selector: row => row.startDate,
  sortable: true
}, {
  name: 'State Of Birth',
  selector: row => row.dateOfBirth,
  sortable: true
}, {
  name: 'Street',
  selector: row => row.street,
  sortable: true
}, {
  name: 'City',
  selector: row => row.city,
  sortable: true
}, {
  name: 'State',
  selector: row => row.state,
  sortable: true
}, {
  name: 'Zip code',
  selector: row => row.zipCode,
  sortable: true
}, {
  name: 'Department',
  selector: row => row.department,
  sortable: true
}];

function Table(props) {
  const data = _store.default.getState().data;

  const [filterText, setFilterText] = (0, _react.useState)("");
  const [resetPaginationToggle, setResetPaginationToggle] = (0, _react.useState)(false);
  const filteredItems = data.filter(item => item.firstName.toLowerCase().includes(filterText.toLowerCase()) || item.lastName.toLowerCase().includes(filterText.toLowerCase()) || item.startDate.toLowerCase().includes(filterText.toLowerCase()) || item.dateOfBirth.toLowerCase().includes(filterText.toLowerCase()) || item.department.toLowerCase().includes(filterText.toLowerCase()) || item.street.toLowerCase().includes(filterText.toLowerCase()) || item.city.toLowerCase().includes(filterText.toLowerCase()) || item.state.toLowerCase().includes(filterText.toLowerCase()) || item.zipCode.toLowerCase().includes(filterText.toLowerCase()));
  console.log(filteredItems);
  const subHeaderComponentMemo = (0, _react.useMemo)(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return /*#__PURE__*/_react.default.createElement("input", {
      placeholder: "search",
      style: {
        width: '15em'
      },
      onChange: e => setFilterText(e.target.value),
      onClear: handleClear,
      filterText: filterText
    });
  }, [filterText, resetPaginationToggle]);
  console.log(filteredItems);

  const handleSort = (column, sortDirection) => console.log(column.selector, sortDirection);

  return /*#__PURE__*/_react.default.createElement(_reactDataTableComponent.default, {
    pagination: true,
    title: "Liste des Employ\xE9s",
    columns: columns,
    onSort: handleSort,
    data: filteredItems,
    paginationResetDefaultPage: resetPaginationToggle // optionally, a hook to reset pagination to page 1
    ,
    subHeader: true,
    subHeaderComponent: subHeaderComponentMemo,
    persistTableHead: true
  });
}

;