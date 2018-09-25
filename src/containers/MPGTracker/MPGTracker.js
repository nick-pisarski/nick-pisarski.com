import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Section, SectionContent, LoadingIcon} from '@shared/ui/index';
import Chart from './Chart/Chart';
import DataTable from './DataTable/DataTable';

import { loadMPGList, resetLoadAttempts } from "./ducks";

import "./MPGTracker.css";

class GasMPG extends Component{
       
    componentDidMount() {
        if(this.props.loadAttempts < 1){
            this.props.loadList();
        }
    }
    
    componentWillUnmount() {
        this.props.resetLoadAttempts();
    }

    render(){
        const {props} = this
        if(props.hasError){
            return <div className="GasMPG"><div>{props.error}</div></div>;
        }

        return (
            <div className="GasMPG">
                {props.loading ? <LoadingIcon />: null}
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
        loadList: () => dispatch(loadMPGList()),
        resetLoadAttempts: () => dispatch(resetLoadAttempts())
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(GasMPG);