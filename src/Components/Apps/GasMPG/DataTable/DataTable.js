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
            const dataKeys = Object.keys(item);
            const colWidth = 100 / dataKeys.length;
            this.setState({dataKeys, colWidth});
        }
    }

    renderNumber = item => item.toFixed(2);

    renderTableCell = (item, key, isHeader=false) => {
        let cellClass = 'cell';
        if(isHeader) cellClass = 'cell header';
        if(typeof item === "number") item = this.renderNumber(item);
        return <div className={cellClass} key={key} style={{width: `${this.state.colWidth}%`}}>{item}</div>
    }

    renderTableRow = (item, key, isHeader=false) => {
        let rowClass = 'row';
        if(isHeader) rowClass = 'row header';

        return (
            <div key={key} className={rowClass} style={{height: `${this.state.rowHeight}px`}}>
                {this.state.dataKeys.map((data_key, iter) => {
                    return this.renderTableCell(item[data_key], `${key}${iter}`, isHeader);
                })}
            </div>
        );
    }

    renderTableHeader = () => {
        const item = {
            date: 'Date',
            miles: 'Miles',
            gallons: 'Gallons',
            miles_per_gallon: 'Miles Per Gallon',
            cost_per_gallon: 'Cost Per Gallon',
            total_cost: 'Total Cost'
        }
        return this.renderTableRow(item, null, true);
    }
    
    render(){
        const {data} = this.props;
        const renderedHeader = this.renderTableHeader();
        const renderedData = data.map((item, iter) => {
            return (this.renderTableRow(item, iter))
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