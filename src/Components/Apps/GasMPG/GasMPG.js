import React, { Component } from 'react';
import {Section, SectionContent, LoadingIcon} from '../../../Shared/UI/UI';
import Chart from './Chart/Chart';
import DataTable from './DataTable/DataTable';

import Axios from 'axios';
import moment from 'moment';

import "./GasMPG.css";

class GasMPG extends Component{
    state = {
        data: [],
        dataURL: '/mpgs',
        loading: true,
        error: null
    }

    componentDidMount() {
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
        const {data} = this.state;
        if(this.state.loading){
            return <div className="GasMPG"><LoadingIcon /></div>;
        }
        return (
            <div className="GasMPG">
                <Section>
                    <SectionContent className='chart'>
                        <div className='stats'> Stats</div>
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

export default GasMPG;