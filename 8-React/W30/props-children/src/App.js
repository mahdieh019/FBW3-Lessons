import React from 'react';
import './App.css';
import Person from './Person'

function App() {
  return (
    <div className="App">
        <h1>React Props Children</h1>

        <Person name="Mansour" city="Hamburg" job="React Developer" class="blue">
          My name is Mahsa and job is web developer
        </Person>

        <Person name="Romal" city="Berlin" job="PHP Developer"/>
        <Person name="John" city="Stutgart" job="Javascript Developer"/>

        <Person name="Mahsa" city="Hamburg" job="Java Developer">
          My name is Mahsa and job is web developer
        </Person>

    </div>
  );
}

export default App;
