import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import FilterComponent from 'react-data-table-component'
import DataTable from 'react-data-table-component';
import store from '../redux/store/store';


const columns = [

    {
        name: 'First Name',
        /**
         * The InputDatePickerEmployees function is a React component that displays a label and a date picker. 
         * 
         * The date picker is a DatePicker component from the react-datepicker library. 
         * 
         * The date picker is configured to show the month dropdown and the year dropdown. 
         * 
         * The date picker is configured to show the next month when the user clicks on the month dropdown. 
         * 
         * The date picker is configured to show the date picker in a portal. 
         * 
         * The date picker is configured to clear the date picker when the user clicks on the clear button. 
         * 
         * The date picker is configured to show the date picker in a portal. 
         * 
         * The date picker is configured to show the date picker in a portal. 
         * 
         * The date picker is configured to show the date picker in a portal. 
         * 
         * The date picker is
         * @param props - The props that are passed to the component.
         * @returns A datepicker component.
         */
        selector: row => row.firstName,
        sortable: true,
    },
    {
        name: 'Last Name',
        selector: row => row.lastName,
        sortable: true,
    },
    {
        name: 'Start Date',
        selector: row => row.startDate,
        sortable: true,

    },
    {
        name: 'State Of Birth',
        selector: row => row.dateOfBirth,
        sortable: true,
    },
    {
        name: 'Street',
        selector: row => row.street,
        sortable: true,
    },
    {
        name: 'City',
        selector: row => row.city,
        sortable: true,
    },
    {
        name: 'State',
        selector: row => row.state,
        sortable: true,
    },
    {
        name: 'Zip code',
        selector: row => row.zipCode,
        sortable: true,
    },
    {
        name: 'Department',
        selector: row => row.department,
        sortable: true,
    },
];



/**
 * It creates a table with the data from the store.
 * @param props - The props passed to the component.
 * @returns The DataTable component is being returned.
 */
export default function Table(props) {


    const data = store.getState().data;
    const [filterText, setFilterText] = useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = data.filter(
        (item) => item.firstName.toLowerCase().includes(filterText.toLowerCase())
            || item.lastName.toLowerCase().includes(filterText.toLowerCase())
            || item.startDate.toLowerCase().includes(filterText.toLowerCase())
            || item.dateOfBirth.toLowerCase().includes(filterText.toLowerCase())
            || item.department.toLowerCase().includes(filterText.toLowerCase())
            || item.street.toLowerCase().includes(filterText.toLowerCase())
            || item.city.toLowerCase().includes(filterText.toLowerCase())
            || item.state.toLowerCase().includes(filterText.toLowerCase())
            || item.zipCode.toLowerCase().includes(filterText.toLowerCase())
    );
    console.log(filteredItems)
    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (

            <input placeholder="search" style={{ width: '15em' }} onChange={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);

    console.log(filteredItems)
    const handleSort = (column, sortDirection) => console.log(column.selector, sortDirection)
    return (
        <DataTable
            pagination title="Liste des Employ??s"
            columns={columns}
            onSort={handleSort}
            data={filteredItems}
            paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            persistTableHead
        />
    );
};