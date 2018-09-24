import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from "react-router-dom";
import HomePage from '@components/pages/HomePage/HomePage';
import AppsPage from '@components/pages/Apps/AppsPage';
import GasMPG from '@containers/MPGTracker/MPGTracker';

import Header from '@containers/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="nick-pisarski.com"/>
          <Switch>
              <Route path="/apps/gasmpg" exact component={GasMPG} />
              <Route path="/apps" component={AppsPage} />
              <Route path="/" exact component={HomePage} />
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
