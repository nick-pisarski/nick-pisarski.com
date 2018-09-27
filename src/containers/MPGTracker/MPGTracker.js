import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Section, SectionContent, LoadingIcon} from '@shared/ui/index';
import Button from '@shared/ui/Buttons/Button';
import Chart from './Chart/Chart';
import MPGTable from './MPGTable/MPGTable';
import MPGEntryForm from './MGPEntryForm/MPGEntyForm';

import { loadMPGList, resetLoadAttempts, toggleAddForm } from "./ducks";

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

    onAddClick = () => {
        this.props.toggleForm()
    }

    onAddFormSubmitted = () => {
        this.props.toggleForm()
    }

    render(){
        const {props} = this
        if(props.hasError){
            return <div className="GasMPG"><div>{props.error}</div></div>;
        }

        return (
            <div className="MPGTracker">
                {props.loading ? <LoadingIcon /> : null}
                {/* {!props.loading && props.showAddForm ? <MPGEntryForm onFormSubmitted={this.onAddFormSubmitted}/>: null} */}
                <Section title="Data" showContent={true}>
                    <SectionContent  className='data'>
                        <div id="addNewMPG" className="add-mpg-container">
                            <Button label="Add +" onClick={this.onAddClick}/>
                        </div>
                        <MPGTable 
                            data={props.data} 
                            loading={props.loading} 
                            defaultPageSize={5}
                            showPageSizeOptions={false}/>                
                    </SectionContent>
                </Section>
                <Section title="Chart">
                    <SectionContent  className='chart'>
                        <Chart data={props.data} car={props.car} y_prop="miles_per_gallon" />
                    </SectionContent>
                </Section>
                <Section title="Statistics" showContent={false}>
                    <SectionContent  className='stats'>
                        <div style={{height: '240px'}}>Coming Soon</div>             
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
        toggleForm: () => dispatch(toggleAddForm()),
        resetLoadAttempts: () => dispatch(resetLoadAttempts())
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(GasMPG);