import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Person,app} from './App';
import Todo from './todo/todo.js'


var list=(
    <div>
        <Person name="AMIT" job="C++ Developer"></Person>
        <Person Appname="AHMAD" job="C# Developer"/>
    </div>
);

ReactDOM.render(<App name="Mansour" city="Hamburg"/>, document.getElementById('root'));
ReactDOM.render(<Person name="Peter" job="React Developer" age={23} />,document.querySelector('#result'));
ReactDOM.render(<Person name="Natalie" job="Vue js Developer" age={20}/>,document.querySelector('#result2'));

ReactDOM.render(app,document.querySelector('#result3'));
ReactDOM.render(list,document.getElementById("list"));
ReactDOM.render(<Todo />,document.getElementById('todo'));


