import React from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css'

import { Dollar, Decimal } from "@shared/ui/Masks/index";

const columns = [{
            Header: 'Date',
            accessor: 'created'
          },{
            Header: 'Miles',
            accessor: 'miles',
            Cell: props => <Decimal value={props.value} places={1}/>
          },{
            Header: 'Miles Per Gallon',
            accessor: 'miles_per_gallon',
            Cell: props => <Decimal value={props.value}/>
          },{
            Header: 'Cost Per Gallon',
            accessor: 'cost_per_gallon',
            Cell: props => <Dollar value={props.value} />
          },{
            Header: 'Cost',
            accessor: 'total',
            Cell: props => <Dollar value={props.value} />
          },{
            Header: 'Notes',
            accessor: 'notes' 
          }
];

export default  props => <ReactTable data={props.data} loading={props.loading} columns={columns} />;