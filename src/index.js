import React from 'react';
import ReactDOM from 'react-dom';
import store from './store.js'
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route } from "react-router-dom";

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import Axios from 'axios';

Axios.defaults.baseURL = 'https://8x4k8f8o93.execute-api.us-east-1.amazonaws.com/dev';
Axios.defaults.headers['x-api-key'] = 'gqElzPaeewrfJA0Rp8oh6RsLzRe71SH7VdAgXbE7';
Axios.defaults.headers['Content-Type'] = 'application/json';


const app = (
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
