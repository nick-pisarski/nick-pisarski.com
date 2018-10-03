import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Glyphicon} from 'react-bootstrap'
import {Section, SectionContent, LoadingIcon} from '@shared/ui/index';
import HoverButton from '@shared/ui/Buttons/HoverButton/HoverButton';
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

    handleFormShow = () => {
        this.props.toggleForm(true);
    }

    handleFormSubmit = (formData) => {
        this.props.toggleForm(false);
        console.log('Submitting the following data: ', formData);
    }

    handleFormHide = () => {
        this.props.toggleForm(false);
    }

    render(){
        const {props} = this
        if(props.hasError){
            return <div className="GasMPG"><div>{props.error}</div></div>;
        }

        return (
            <div className="MPGTracker">
                {props.loading ? <LoadingIcon /> : null}
                <MPGEntryForm 
                    show={props.showAddForm && !props.loading} 
                    handleHide={this.handleFormHide} 
                    onFormSubmitted={data => this.handleFormSubmit(data)}/>
                <Section title="Data" showContent={true}>
                    <SectionContent  className='data'>
                            <HoverButton buttonText="Add" subButtonText={<Glyphicon glyph="plus"/>} onClick={this.handleFormShow}/>
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
        ...state.mpgTracker.main
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