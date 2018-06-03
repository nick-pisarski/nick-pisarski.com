import React, { Component } from 'react';

// import Chart from 'chart.js';
import {VictoryLine, VictoryChart, VictoryAxis, VictoryLabel, VictoryTheme, VictoryStack }from 'victory';
import "./Chart.css"

const months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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

    getAverage = (y_prop) => {
        const {data} = this.props;
        const sum = data.reduce((sum, next, iter) => {
            return sum += next[y_prop];
        }, 0);
        return Math.round(sum / data.length);
    }

    getAverageData = (data, avg) => {
        return data.map(item => {
            return {x: item.x, y: avg}
        })
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
        const avgMPG = this.getAverage('miles_per_gallon');
        const avgData = this.getAverageData(data, avgMPG);
        console.log(avgData);

        
        return (
            <div className="Chart">
                <VictoryChart scale={{ x: "time" }} domain={{y:domain}}
                    theme={VictoryTheme.material}
                    width={800}
                >        
                <VictoryAxis 
                    tickFormat={x => {
                        const date = new Date(x);
                        // const month = months[date.getMonth()];
                        const month = date.getMonth() + 1;
                        const year  = date.getFullYear().toString();
                        return `${month}/${year[2]}${year[3]}`
                    }} 
                    tickCount={6}
                    crossAxis
                    standalone={false}
                    />            
                <VictoryAxis 
                    tickFormat={y => y.toFixed(0)} 
                    label='Miles Per Gallon'
                    axisLabelComponent={
                        <VictoryLabel dy={-30}/>
                    }
                    dependentAxis
                    crossAxis
                    standalone={false}
                    />          
                    <VictoryStack style={{
                        parent: { border: "1px solid #ccc"},
                        labels:{
                            stroke: "#00ff00",
                            fill: d => d.y  < avgMPG ? '#FF0000' : '#00FF00',
                        }
                    }}>
                        <VictoryLine
                            data={data}
                            style={{
                                data: { stroke: "#c43a31" },
                                
                            }}
                            labels={ d => d.y}
                            interpolation="natural"
                            animate={{
                                duration: 2000,
                                onLoad: { duration: 1000 }
                            }}
                            />
                        <VictoryLine
                            data={avgData}
                            style={{
                                data: { stroke: "#0000ff" },
                            }}
                        />
                        </VictoryStack>  
                </VictoryChart>

            </div>
        );
    }
}

export default Chart;