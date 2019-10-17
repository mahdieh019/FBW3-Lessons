import React from 'react';
import './App.css';
import Input from './input'

const handleSubmit=e=>{
  e.preventDefault();
  alert('Submited');
  console.log(e.target['todo']);
  console.log(e.target['todo'].value);

}

function App() {
  return (
    <div className="App">
        <h2 id="h2">Control Component in React</h2>
        <form onSubmit={handleSubmit}>
          <Input/>
          <button>Submit</button>
        </form>
    </div>
  );
}

export default App;
