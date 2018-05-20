import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="nick-pisarski.com"/>
        <Switch>
            
            <Route path="/projects" component={HomePage} />
            <Route path="/" exact component={HomePage} />
            <Route path="*" exact component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
