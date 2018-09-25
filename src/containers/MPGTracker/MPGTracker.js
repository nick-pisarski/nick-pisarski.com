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
    state = {
        data: [],
        dataURL: '/mpgs',
        loading: true,
        error: null
    }

    componentDidMount() {
        this.props.loadList();
        if(this.state.data.length === 0 && this.state.loading){
            Axios.get(this.state.dataURL)
            .then(res => {
                res.data.forEach(element => {
                    element.created = moment(element.created).format("MM/DD/YYYY")
                });
                this.setState({data: res.data, loading: false});
            })
            .catch(err => {console.log(err); this.setState({error: err})})
        }
    }
    
    render(){
        console.log(this.props)
        const {data} = this.state;
        if(this.state.loading){
            return <div className="GasMPG"><LoadingIcon /></div>;
        }
        return (
            <div className="GasMPG">
                <Section>
                    <SectionContent className='chart'>
                        <Chart data={data} y_prop="miles_per_gallon" />
                    </SectionContent>
                </Section>
                <Section>
                    <SectionContent className='data'>
                        <DataTable data={data}/>                    
                    </SectionContent>
                </Section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.mpgTracker.mpgList
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        loadList: () => dispatch(loadMPGList())
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(GasMPG);