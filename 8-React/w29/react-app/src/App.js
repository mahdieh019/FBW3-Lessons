import React ,{Component}from 'react';
import Persons from './Persons/Persons'
import './App.css';

class App extends Component {
  state={
    persons:[
      {name:'Ali', job:'Web designer', age:23},
      {name:'Hamed', job:'Android developer', age:34}
    ]
  }
  changeContent=()=>{

    this.setState({
      persons:[
        {name:'John', job:'Dentist', age:53, class:'vip'},
        {name:'Lara', job:'Java developer', age:44}
      ]
    })
  }
  render(){
    const style={
      background:'white',
      border:'1px dashed blue',
      borderRadius:'25px',
      padding:'10px',
      cursor:'pointer',
      fontWeight:'bold',
      fontStyle:'italic'
    }
    return(
      // React does not accept two seperate div, it is a part of jsx attribute
      <div className="App" onMouseDown={this.changeContent}>
          <Persons name="Maria" job="jQuery" age={28} />
          <Persons name="Mina" job="Java developer" age={25} />
          <Persons name="Rania" job="js developer" age={48} />
          <Persons name="Sami" job="C++" age={38} />

          <div className="dark">
              <button style={style} className="btn" onClick={this.changeContent}>Change content</button>
          </div>

          <Persons name={this.state.persons[0].name} job={this.state.persons[0].job} age={this.state.persons[0].age} class={this.state.persons[0].class}/>
          <Persons name={this.state.persons[1].name} job={this.state.persons[1].job} age={this.state.persons[1].age}/>
      </div>
    );
    // return React.createElement('div',null,React.createElement('h1',null,'This is React App'));
   //return React.createElement('div',{className:'App'},React.createElement('h1',null,'This is React App'));

  }
}

export default App;
