import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './demo.css'
import './material-dashboard.css'
import Layout from './layout';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.css';

import 'jquery';
import 'popper.js';
import 'bootstrap';

ReactDOM.render(<Layout />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
