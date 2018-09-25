import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from "react-router-dom";
import HomePage from '@components/pages/HomePage/HomePage';
import AppsPage from '@components/pages/Apps/AppsPage';
import GasMPG   from '@containers/MPGTracker/MPGTracker';

import {loginUser, logoutUser} from './ducks';

import Header from '@components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="nick-pisarski.com" user={this.props.user} userLoggedIn ={this.props.isUserLoggedIn} onLogin={this.props.login} onLogout={this.props.logout}/>
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
      user: state.app.user,
      isUserLoggedIn: state.app.isUserLoggedIn
  };
}

const mapDispatchToProps = dispatch => {
  return {
      login: (user) => dispatch(loginUser(user)),
      logout: () => dispatch(logoutUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
