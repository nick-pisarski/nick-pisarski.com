import React, { Component } from 'react';

// import Chart from 'chart.js';
import {VictoryLine, VictoryChart, VictoryAxis, VictoryLabel,   VictoryLegend, VictoryTheme, VictoryBrushContainer, VictoryZoomContainer }from 'victory';
import "./Chart.css"

//used to add a little padding at the top of the y-axis
const domain_offset = 5;
const formatData = (data, y_prop) => {
    return data.map((item, iter) => {
        return{
            x: item['created'],
            y: item[y_prop]
        };
    });
}

const getAverage = (data) => {
    const sum = data.reduce((sum, next, iter) => {
        return sum += next.y;
    }, 0);
    return Math.round(sum / data.length);
}

const getAverageData = (data, avg) => {
    return data.map(item => {
        return {x: item.x, y: avg}
    })
}

const getMax = (data)=> data.map(item => item.y).reduce((max, curr) => Math.max(max, curr));
const getMin = (data)=> data.map(item => item.y).reduce((min, curr) => Math.min(min, curr));

const getDomain = (data, property, min = 0) => [min, getMax(data)+domain_offset];

const getCalculations = (original_data, y_prop) => {
    const data = formatData(original_data, y_prop);
    const avg_value = getAverage(data);
    const avg_data=  getAverageData(data, avg_value);
    const y_domain = getDomain(data);
    const max_value = getMax(data);
    const min_value = getMin(data);
    return {
        data,
        avg_value,
        avg_data,
        y_domain,
        max_value,
        min_value
    };
}

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

    handleZoom = (domain) => this.setState({selectedDomain: domain});
    
    handleBrush= (domain) => this.setState({zoomDomain: domain});

    render(){
        const {data, avg_data, y_domain, avg_color, data_color, width, height, min_value, max_value} = this.state;
        console.log(this.state)
        const mid_point = Math.round(data.length/2);
        return (
            <div className="Chart">
                <VictoryChart scale={{ x: "time" }} domain={{y:y_domain}}
                    theme={VictoryTheme.material}
                    width={width}
                    height={height}
                    containerComponent={
                        <VictoryZoomContainer responsive={false}
                          zoomDimension="x"
                          zoomDomain={this.state.zoomDomain}
                          onZoomDomainChange={this.handleZoom.bind(this)}
                        />
                      }
                    >      
                <VictoryLabel text="MPG over Time" x={width/2-50} y={50}/>
                <VictoryLegend x={width - 200} y={height-100}
                    orientation="horizontal"
                    style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
                    gutter={20}
                    data={[
                        { name: "Car_Name", symbol: { fill: data_color,} },
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
                        tickFormat={y => y.toFixed(2)} 
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
                            if(val.y === max_value) return `MAX: ${val.y}`
                            if(val.y === min_value) return `MIN: ${val.y}`
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
                            const is_middle = data[mid_point].x.toString() === val.x.toString();
                            return is_middle ? `AVG: ${val.y}` : null;
                        }}
                        />
                </VictoryChart>
                
                <VictoryChart scale={{ x: "time" }} domain={{y:y_domain}}
                    theme={VictoryTheme.material}
                    width={width/3}
                    height={height/2}
                    containerComponent={
                        <VictoryBrushContainer responsive={false}
                            brushDimension="x"
                            brushDomain={this.state.selectedDomain}
                            onBrushDomainChange={this.handleBrush.bind(this)}
                        />
                      }
                        >        
                    <VictoryAxis 
                        tickFormat={x => new Date(x).getFullYear()} 
                        crossAxis
                        standalone={false}
                        />                                  
                    
                    <VictoryLine
                        data={data}
                        style={{
                            data: { stroke: data_color},
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