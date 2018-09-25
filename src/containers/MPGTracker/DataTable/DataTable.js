import React, { Component } from 'react';

import "./DataTable.css";

class DataTable extends Component{

    state = {
        rowHeight: 32,
        colWidth: 100 / 7,
        labels: {
            created: 'Date',
            miles: 'Miles',
            gallons: 'Gallons',
            miles_per_gallon: 'Miles Per Gallon',
            cost_per_gallon: 'Cost Per Gallon',
            total: 'Total Cost',
            notes: 'Notes'
        }
    }

    renderNumber = item => item.toFixed(2);

    renderTableCell = (item, key, isHeader=false) => {
        const cellClass = isHeader  ? 'cell header' : 'cell';

        item = typeof item === "number" ? this.renderNumber(item) : item; 

        return <div className={cellClass} key={key} style={{width: `${this.state.colWidth}%`}}>{item}</div>
    }

    renderTableRow = (item, key, isHeader=false) => {
        const rowClass = isHeader ? 'row header' : 'row';

        return (
            <div key={key} className={rowClass} style={{height: `${this.state.rowHeight}px`}}>
                {Object.keys(this.state.labels).map((data_key, iter) => {
                    return this.renderTableCell(item[data_key], `${key}_cell${iter}`, isHeader);
                })}
            </div>
        );
    }

    renderTableHeader = () => this.renderTableRow(this.state.labels, 'header', true);
    
    render(){
    
        const {data} = this.props;
        const renderedHeader = this.renderTableHeader();
        const renderedData = data.map((item, iter) => {
            return (this.renderTableRow(item, `row${iter}`))
        })

        return (
            <div className='DataTableContainer'>
                <div className='DataTable'>
                    {renderedHeader}
                    {renderedData}
                </div>
            </div>
        );
    }
}

export default DataTable;