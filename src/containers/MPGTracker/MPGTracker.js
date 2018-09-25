import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Section, SectionContent, LoadingIcon} from '@shared/ui/index';
import Chart from './Chart/Chart';
import DataTable from './DataTable/DataTable';

import { loadMPGList } from "./ducks";

import Axios from 'axios';
import moment from 'moment';

import "./MPGTracker.css";

class GasMPG extends Component{
    state ={
        loaded: false,
    }
    
    componentDidMount() {
        if(!this.state.loaded){
                      
            Axios.get('/mpg')
            .then(res => {
                res.data.forEach(element => {
                    element.created = moment(element.created).format("MM/DD/YYYY")
                });
                console.log(res.data)

                this.setState({loaded: true})
            })
            .catch(err => console.log(err));                      
        }
    }
    
    render(){
        const {props} = this
        console.log(props);
        if(props.loading || props.data.length === 0){
            return <div className="GasMPG"><LoadingIcon /></div>;
        }
        return (
            <div className="GasMPG">
                <Section>
                    <SectionContent className='chart'>
                        <Chart data={props.data} y_prop="miles_per_gallon" />
                    </SectionContent>
                </Section>
                <Section>
                    <SectionContent className='data'>
                        <DataTable data={props.data}/>                    
                    </SectionContent>
                </Section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.mpgTracker
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        loadList: () => dispatch(loadMPGList())
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(GasMPG);