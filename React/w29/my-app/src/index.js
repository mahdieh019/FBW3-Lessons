import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Person,app} from './App';
import Todo from './todo/todo.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App name="Mansour" city="Hamburg"/>, document.getElementById('root'));

var list=(
    <div>
        <Person name="AMIT" job="C++ Developer"></Person>
        <Person name="AHMAD" job="C# Developer"/>
    </div>
);

ReactDOM.render(<Person name="Peter" job="React Developer"/>,document.querySelector('#result'));
ReactDOM.render(<Person name="Natalie" job="Vue js Developer"/>,document.querySelector('#result2'));
ReactDOM.render(app,document.querySelector('#result3'));
ReactDOM.render(list,document.getElementById("list"));
ReactDOM.render(<Todo />,document.getElementById('todo'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
