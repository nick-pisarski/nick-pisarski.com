import React, { Component } from 'react';

import {Page, Section, SectionContent} from './../../../Shared/UI/UI';

class SettingsPage extends Component{
    
    render(){
        return (
        <React.Fragment>
            <Page title='Site Settings'>
                <Section title='Coming Soon'>
                    <SectionContent>
                        Will be used for Settings
                    </SectionContent>
                </Section>
                
            </Page>
        </React.Fragment>
    );
    }
}

export default SettingsPage;