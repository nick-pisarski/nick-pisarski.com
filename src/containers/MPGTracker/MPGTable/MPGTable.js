import React from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css'

const columns = [{
            Header: 'Date',
            accessor: 'created'
          },{
            Header: 'Miles',
            accessor: 'miles'
          },{
            Header: 'Miles Per Gallon',
            accessor: 'miles_per_gallon'
          },{
            Header: 'Cost Per Gallon',
            accessor: 'cost_per_gallon'
          },{
            Header: 'Cost',
            accessor: 'total'
          },{
            Header: 'Notes',
            accessor: 'notes' 
          }
];

export default  props => <ReactTable data={props.data} columns={columns} />;