import React, { Component } from 'react';

import "./DataTable.css";

class DataTable extends Component{

    state = {
        rowHeight: 32,
        dataKeys: [],
        colWidth: 0,
    }

    componentDidMount(){
        if(this.props.data.length > 0){
            const item = this.props.data[0]
            const dataKeys = Object.keys(item).filter(item => item !== 'id');
            const colWidth = 100 / dataKeys.length;
            this.setState({dataKeys, colWidth});
        }
    }

    renderNumber = item => item.toFixed(2);

    renderTableCell = (item, key, isHeader=false) => {
        const cellClass = isHeader  ? 'cell header' : 'cell';

        item = item === "number" ? this.renderNumber(item) : item; 

        return <div className={cellClass} key={key} style={{width: `${this.state.colWidth}%`}}>{item}</div>
    }

    renderTableRow = (item, key, isHeader=false) => {
        const rowClass = isHeader ? 'row header' : 'row';

        return (
            <div key={key} className={rowClass} style={{height: `${this.state.rowHeight}px`}}>
                {this.state.dataKeys.map((data_key, iter) => {
                    return this.renderTableCell(item[data_key], `${key}_cell${iter}`, isHeader);
                })}
            </div>
        );
    }

    renderTableHeader = () => {
        const item = {
            created: 'Date',
            miles: 'Miles',
            gallons: 'Gallons',
            miles_per_gallon: 'Miles Per Gallon',
            cost_per_gallon: 'Cost Per Gallon',
            total: 'Total Cost'
        }
        return this.renderTableRow(item, 'header', true);
    }
    
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