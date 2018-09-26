import React from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css'

import { Dollar, Decimal } from "@shared/ui/Masks/index";

const columns = [{
            Header: 'Date',
            accessor: 'created',
            maxWidth: 95
          },{
            Header: 'Miles',
            accessor: 'miles',
            Cell: props => <Decimal value={props.value} places={1}/>,
            maxWidth: 86
          },{
            Header: 'Miles Per Gallon',
            accessor: 'miles_per_gallon',
            Cell: props => <Decimal value={props.value}/>,
            maxWidth: 125
          },{
            Header: 'Cost Per Gallon',
            accessor: 'cost_per_gallon',
            Cell: props => <Dollar value={props.value} />,
            maxWidth: 125
          },{
            Header: 'Cost',
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
      data={props.data} 
      loading={props.loading} 
      columns={columns}
      defaultPageSize={5}
       />
  )};