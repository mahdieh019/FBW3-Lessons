import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './home';
import BootstrapApp from './BootstrapApp'

 ReactDOM.render(<App />, document.getElementById('root1'));
 ReactDOM.render(<Home />, document.getElementById('root'));
 ReactDOM.render(<BootstrapApp />, document.getElementById('root2'));


