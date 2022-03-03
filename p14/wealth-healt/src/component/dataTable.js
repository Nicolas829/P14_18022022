import DataTable from 'react-data-table-component';

const columns = [
    
    {
        name: 'First Name',
        selector: row => row.firstName
    },
    {
        name: 'Last Name',
       selector: row => row.lastName
    },
      {
          name: 'Start Date',
          selector: row => row.startDate
       
    },
        {
        name: 'State Of Birth',
        selector: row => row.dateOfBirth
    },
          {
        name: 'Street',
        selector: row => row.street
    },
            {
        name: 'City',
        selector: row => row.city
    },
              {
        name: 'State',
        selector: row => row.state
    },
              {
        name: 'Zip code',
        selector: row => row.zipCode
    },
               {
        name: 'Department',
        selector: row => row.department
    },
];


export default function Table(props) {
    console.log(props)
    return (
        <DataTable
            columns={columns}
            data={props.data}
        />
    );
};