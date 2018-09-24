import React, { Component } from 'react';
import _ from 'lodash';
import {Page, Section, SectionContent} from '@shared/ui/index';

import data from './data.json';

class HomePage extends Component{

    renderContent = (content, key) => {
        return (
            <SectionContent key={key}>
                {content.content}
            </SectionContent>
        )
    }

    renderSection = (section, key)=> {
        return (
            <Section title={section.title || null} key={key}>
                {_.map(section.contents, (content, iter) => this.renderContent(content, `${key}_content_${iter}`))}
            </Section>
        )
    }
    
    render(){
        return (
            <React.Fragment>
                <Page>
                    {_.map(data.sections, (section, iter) => this.renderSection(section, `section_${iter}`))}
                </Page>
            </React.Fragment>
        );
    }
}

export default HomePage;