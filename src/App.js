import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route, Switch } from "react-router-dom";

import Header from '@containers/Header/Header';
import HomePage from '@components/pages/HomePage/HomePage';
import ProjectsPage from '@components/pages/Projects/ProjectsPage';
import AppsPage from '@components/pages/Apps/AppsPage';
import AboutMePage from '@components/pages/AboutMe/AboutMePage';
import ResumePage from '@components/pages/AboutMe/Resume/ResumePage';
import GasMPG from '@containers/MPGTracker/MPGTracker';

import SettingsPage from '@components/pages/Settings/SettingsPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="nick-pisarski.com"/>
        <Switch>
            <Route path="/settings" component={SettingsPage} />         
          
            <Route path="/aboutme/resume" component={ResumePage} />          
            <Route path="/aboutme" component={AboutMePage} />
            <Route path="/apps/gasmpg" exact component={GasMPG} />
            <Route path="/apps" component={AppsPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/" exact component={HomePage} />
            <Route path="*" exact component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      
  };
}

const mapDispatchToProps = dispatch => {
  return {
      
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
