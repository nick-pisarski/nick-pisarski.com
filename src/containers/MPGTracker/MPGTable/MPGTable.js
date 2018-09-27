import React from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css'

import { Dollar, Decimal } from "@shared/ui/Masks/index";

const columns = [{
            Header: 'Date',
            accessor: 'created',
            maxWidth: 95,
            Cell: props => props.value.format("MM/DD/YY")
          },{
            accessor: 'miles_per_gallon',
            Header: props => <span title='Miles Per Gallon'>MPG</span>,
            Cell: props => <Decimal value={props.value}/>,
            maxWidth: 125
          },{
            Header: 'Miles',
            accessor: 'miles',
            Cell: props => <Decimal value={props.value} places={1} title={props.value}/>,
            maxWidth: 86
          },{
            Header: props => <span title='Cost Per Gallon'>CPG</span>,
            accessor: 'cost_per_gallon',
            Cell: props => <Dollar value={props.value} />,
            maxWidth: 125
          },{
            Header: props => <span title='Total Cost'>Total</span>,
            accessor: 'total',
            Cell: props => <Dollar value={props.value} />,
            maxWidth: 86
          },{
            Header: 'Notes',
            accessor: 'notes' 
          }
];

export default  props => {
  return (
    <ReactTable 
      {...props}
      columns={columns}
       />
  )};