import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory } from 'react-router'
import Routes from "./routes/routes";


// browerhistory allow us go back and forward
ReactDOM.render(
    <Router
        history={browserHistory}
        routes={Routes}
    />
    , document.getElementById('root'));

