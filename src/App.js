import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './Components/Header/Header';
import HomePage from './Components/Pages/HomePage/HomePage';
import ProjectsPage from './Components/Pages/Projects/ProjectsPage';
import AppsPage from './Components/Pages/Apps/AppsPage';
import AboutMePage from './Components/Pages/AboutMe/AboutMePage';
import ResumePage from './Components/Pages/AboutMe/Resume/ResumePage';
import GasMPG from './Components/Apps/GasMPG/GasMPG';

import SettingsPage from './Components/Pages/Settings/SettingsPage';

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
            <Route path="/apps" component={AppsPage} />
            <Route path="/gasmpg" component={GasMPG} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/" exact component={HomePage} />
            <Route path="*" exact component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
