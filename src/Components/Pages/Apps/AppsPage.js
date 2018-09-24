import React, { Component } from 'react';
import _ from 'lodash';
import {Page, Section, SectionContent} from './../../../Shared/UI/UI';
import {LinkContainer} from 'react-router-bootstrap'

import data from './data.json';

class AppsPage extends Component{
    
    renderSection = (app, key)=> {
        return (
            <Section title={app.name} key={key}>
                <SectionContent>
                    {app.description}
                    <LinkContainer to={app.link_url}><div>{app.link_text || "Check it out"}</div></LinkContainer>
                </SectionContent>
            </Section>
        )
    }

    render(){
        return (
        <React.Fragment>
            <Page title='Apps'>
                {_.map(data.apps, (app, iter) => this.renderSection(app, `app_${iter}`))}
            </Page>
        </React.Fragment>
    );
    }
}

export default AppsPage;