import React from 'react';
import './app.scss';
import img from './image/man.jpeg'
//import './App.css';



function App() {
  return (
    <div className="App">
      <h1>React with Sass</h1>
      <img src={img} alt=''/>
    </div>
  );
}

export default App;
