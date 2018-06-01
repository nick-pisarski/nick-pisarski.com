import React, { Component } from 'react';

// import Chart from 'chart.js';
import {VictoryLine, VictoryChart, VictoryAxis, }from 'victory';
import "./Chart.css"

class Chart extends Component{
    formatData = (y_prop) => {
        const {data} = this.props;
        return data.map((item, iter) => {
            const newItem = {};
            newItem.x = new Date( item['date']);
            newItem.y = item[y_prop];
            return newItem;
        });

    }

    generateDomain = (property, min = 0) => {
        const {data} = this.props;
        const max  = data.map(item => item[property]).reduce((max, curr) => Math.max(max, curr));
        return [min, max];
    }

    render(){
        // const y_prop = 'cost_per_gallon';
        const y_prop = 'miles_per_gallon';
        const data = this.formatData(y_prop);
        const domain = this.generateDomain(y_prop);
        
        return (
            <div className="Chart">
                <VictoryChart scale={{ x: "time" }} domain={{y:domain}}>        
                {/* <VictoryAxis tickFormat={x => new Date(x).getFullYear()} label="Time"/>             */}
                    <VictoryLine
                        data={data}
                        style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc"}
                        }}
                        interpolation="natural"
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                          }}
                    />
                </VictoryChart>

            </div>
        );
    }
}

export default Chart;