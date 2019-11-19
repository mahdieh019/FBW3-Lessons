import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from './App';
import {Provider} from 'react-redux';
import {store} from './redux';
//import App from './App';

ReactDOM.render(<Provider store={store}>
                    <AppContainer/>
                </Provider>, 

document.getElementById('root'));

