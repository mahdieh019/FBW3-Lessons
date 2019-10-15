import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './home';
import BootstrapApp from './BootstrapApp'
import * as serviceWorker from './serviceWorker';

 ReactDOM.render(<Home />, document.getElementById('root'));
 ReactDOM.render(<App />, document.getElementById('root1'));
 ReactDOM.render(<BootstrapApp />, document.getElementById('root2'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
