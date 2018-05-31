import React, { Component } from 'react';

// import Chart from 'chart.js';
import {VictoryLine, VictoryScatter, VictoryChart, VictoryAxis}from 'victory';
import "./Chart.css"

class Chart extends Component{
    formatData = (x_prop, y_prop) => {
        const {data} = this.props;
        return data.map((item, iter) => {
            const newItem = {};
            newItem.x = new Date( item['date']);
            newItem.y = item['miles_per_gallon'];
            return newItem;
        });

    }
    render(){
        const data = this.formatData('date', 'miles_per_gallon');
        return (
            <div className="Chart">
                <VictoryChart scale={{ x: "time" }} domain={{y:[0,45]}}>                    
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