import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));

serviceWorker.unregister();
