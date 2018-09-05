import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Axios from 'axios';

Axios.defaults.baseURL = 'https://8x4k8f8o93.execute-api.us-east-1.amazonaws.com/dev';
Axios.defaults.headers['x-api-key'] = 'gqElzPaeewrfJA0Rp8oh6RsLzRe71SH7VdAgXbE7';
Axios.defaults.headers['Content-Type'] = 'application/json';
const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
