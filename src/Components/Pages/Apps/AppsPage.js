import React, { Component } from 'react';
import {Page, Section, SectionContent} from './../../../Shared/UI/UI';
import {LinkContainer} from 'react-router-bootstrap'

class AppsPage extends Component{
    
    render(){
        return (
        <React.Fragment>
            <Page title='Apps'>
                <Section title='Gas MPG Tracker'>
                    <SectionContent>
                        A tool help track your car's miles per gallon over time.
                        <LinkContainer to="/gasmpg"><div>See it Here</div></LinkContainer>
                    </SectionContent>
                </Section>
            </Page>
        </React.Fragment>
    );
    }
}

export default AppsPage;