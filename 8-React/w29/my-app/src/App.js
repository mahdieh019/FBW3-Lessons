import React  from 'react';
import './App.css';

function App(info) {
  return (
    <div className="App">
      <h1>Hi Mahdieh</h1>
      <p> meeee {info.name}</p>
      <h2>city  {info.city}</h2>
    </div>
  );
}

function Person(props){
  return(
  //jsx code
    <div className="person">
      <h1>{props.name}</h1>
      <p><b>job: </b>{props.job}</p>
      <p>age: {props.age}</p>
    </div>
  );
}
var app=(
  <div className="row">
    <Person name="Dan" job="React Developer" age={age()}/>
    <Person name="Mahdieh" job="Vue js Developer" age={age()}/>
    <Person name="Farhan" job="Vue js Developer" age={age()}/>
  </div>
);
function age(){
  return (parseInt(Math.random()*(35-20+1)+20));
}


export default App;
export {Person , app } ;
