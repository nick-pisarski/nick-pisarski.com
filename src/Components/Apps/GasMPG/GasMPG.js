import React, { Component } from 'react';
import {Section, SectionContent} from '../../../Shared/UI/UI';
import Chart from './Chart/Chart';
import DataTable from './DataTable/DataTable';

import mockData from './mockMPGData.json';

import "./GasMPG.css";

class GasMPG extends Component{
    state = {
        data: mockData
    }
    
    render(){
        const {data} = this.state;
        return (
            <div className="GasMPG">
                <Section>
                    <SectionContent className='chart'>
                        <div className='stats'> Stats</div>
                        <Chart data={data}/>
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