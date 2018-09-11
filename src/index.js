import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory } from 'react-router'

ReactDOM.render(<Router history={browserHistory}/>
    , document.getElementById('root'));
registerServiceWorker();
