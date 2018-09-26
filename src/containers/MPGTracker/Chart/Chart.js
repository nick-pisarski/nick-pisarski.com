import React, { Component } from 'react';
import {VictoryLine, VictoryChart, VictoryAxis, VictoryLabel,   VictoryLegend, VictoryTheme}from 'victory';
import {getCalculations} from '../utilities';


import "./Chart.css"

class Chart extends Component{

    constructor(props){
        super(props);
        const calculatedStateValues = getCalculations(this.props.data, props.y_prop);
        this.state = {            
            avg_color: '#0000FF',
            data_color: "#c43a31",
            width: 700,
            height: 400,
            ...calculatedStateValues
        }
    }    

    static getDerivedStateFromProps(props, state){
        if(JSON.stringify(props.data) === JSON.stringify(state.data)) return null;
        const calculatedStateValues = getCalculations(props.data, props.y_prop);
        return calculatedStateValues;
    }

    render(){
        const {data, avg_data, y_domain, avg_color, data_color, width, height, min_value, max_value} = this.state;
        const mid_point = Math.round(data.length/2);
        return (
            <div className="Chart">
                <VictoryChart scale={{ x: "time" }} domain={{y:y_domain}}
                    theme={VictoryTheme.material}
                    width={width}
                    height={height}
                    >      
                <VictoryLabel text="MPG over Time" x={width/2-50} y={50}/>
                <VictoryLegend x={width - 200} y={height-100}
                    orientation="horizontal"
                    style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
                    gutter={20}
                    data={[
                        { name: `${this.props.car.manufacturerCode} ${this.props.car.model}`, symbol: { fill: data_color,} },
                        { name: "Avg", symbol: { fill: avg_color} },
                        ]}
                    />
                    <VictoryAxis 
                        tickFormat={x => {
                            const date = new Date(x);
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
                    
                    <VictoryLine
                        data={data}
                        style={{
                            data: { stroke: data_color},
                        }}
                        labels={val => {
                            if(val.y === max_value) return `MAX: ${val.y.toFixed(2)}`
                            if(val.y === min_value) return `MIN: ${val.y.toFixed(2)}`
                            return
                        }}
                        interpolation="natural"
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        />
                    <VictoryLine
                        data={avg_data}
                        style={{
                            data: { stroke: avg_color },
                            labels: {fill: avg_color, symbol: 'star'}
                        }}
                        labels={val => {
                            const is_middle = data && data.length > 0 ? data[mid_point].x.toString() === val.x.toString() : null;
                            return is_middle ? `AVG: ${val.y}` : null;
                        }}
                        />
                </VictoryChart>      
               
              
            </div>
        );
    }
}

export default Chart;