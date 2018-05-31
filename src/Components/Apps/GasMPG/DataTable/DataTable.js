import React, { Component } from 'react';

import "./DataTable.css";

class DataTable extends Component{
    renderTableRow = (item, key) => {
        return (
            <div key={key} className="row">
                <div>{item.date}</div>
                <div>{item.miles}</div>
                <div>{item.gallons}</div>
                <div>{item.miles_per_gallon}</div>
                <div>{item.cost_per_gallon}</div>
                <div>{item.total_cost}</div>
            </div>
        );
    }

    renderTableHeader = () => {
        const item = {
            date: 'Date',
            miles: 'Miles',
            gallons: 'Gallons',
            miles_per_gallon: 'Miles Per Gallon',
            cost_per_gallon: 'Gost Per Gallon',
            total_cost: 'Total Cost'
        }
        return this.renderTableRow(item);
    }
    
    render(){
        const {data} = this.props;
        const renderedHeader = this.renderTableHeader();
        const renderedData = data.map((item, iter) => {
            return (this.renderTableRow(item, iter))
        })

        return (
            <div className='DataTable'>
                {renderedHeader}
                {renderedData}
            </div>
        );
    }
}

export default DataTable;