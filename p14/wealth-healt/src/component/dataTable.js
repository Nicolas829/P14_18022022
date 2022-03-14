import { useEffect, useState, useMemo } from 'react';
import FilterComponent from 'react-data-table-component'
import DataTable from 'react-data-table-component';
import store from '../redux/store/store';


const columns = [

    {
        name: 'First Name',
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
            pagination title="Liste des Employés"
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