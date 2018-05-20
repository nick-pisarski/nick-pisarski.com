import React, { Component } from 'react';

import {Page, Section, SectionContent} from './../../../Shared/UI/UI';

class AppsPage extends Component{
    
    render(){
        return (
        <React.Fragment>
            <Page title='Apps'>
                <Section title='App 1'>
                    <SectionContent>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </SectionContent>
                </Section>
            </Page>
        </React.Fragment>
    );
    }
}

export default AppsPage;