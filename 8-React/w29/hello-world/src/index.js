import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Header from './header.js'
import Nav from './nav.js'
import Main from './main.js'
import Section1 from './section1.js'
import Section2 from './section2.js'
import Footer from './footer.js'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<Main />, document.getElementById('main'));
ReactDOM.render(<Section1 />, document.getElementById('section1'));
ReactDOM.render(<Section2/>, document.getElementById('section2'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));


serviceWorker.unregister();
