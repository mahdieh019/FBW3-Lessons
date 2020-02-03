import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import counterReducer from './store/reducer/counterReducer'
import { Provider  } from 'react-redux';
import { createStore  , combineReducers } from 'redux';


 
const x = createStore(counterReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store={x}>
    <App />
    </Provider>

, document.getElementById('root'));


