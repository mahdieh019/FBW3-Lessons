import React ,{Component} from 'react';

<React.Fragment className="App">
    <h1>Hello from React</h1>
    <label htmlFor='name'>Name</label>
</React.Fragment>

--------------------------or ------------------------------
import React ,{Fragment,Component} from 'react';

<Fragment className="App">
    <h1>Hello from React</h1>
    <label htmlFor='name'>Name</label>
</Fragment>

---------------------------or-----------------------------
import React ,{Fragment,Component} from 'react';

<className="App">
    <h1>Hello from React</h1>
    <label htmlFor='name'>Name</label>
</>
--------------------------or--------------------------------
import React ,{ Component} from 'react';

class App extends Component {
  render(){
    return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello from React'));
  }
 
}

---------------------------------name---------------------------
 render(){
    const name='John Doe';

    return (
      <div className="App">
        <h1>Hello {name.toUpperCase()}</h1>
      </div>
    );
  }
  -------------------------function inside the render-----------------------------------
 render(){
    const name='John Doe';
    const foo=()=>'Bars'

    return (
      <div className="App">
        <h1>Hello {foo()}</h1>
      </div>
    );
------------------------------function inside the class---------------

class App extends Component {
  foo=()=>'Bars';

  render(){
    const name='John Doe';
    return (
      <div className="App">
        <h1>Hello {this.foo()}</h1>
      </div>
    );
  }
}
----------------------------------------loading-----------------------
 render(){
    const name='John Doe';
    const loading=true;

    if(loading){
      return <h4>Loading ...</h4>
    }

    return (
      <div className="App">
        <h1>Hello {name}</h1>
      </div>
    );
  }
  --------------------------------or----------------------------
  render(){
    const name='John Doe';
    const loading=true;

    return (
      <div className="App">
        {loading ?  <h1>Loading ...</h1> :  <h1>Hello {name}</h1>}
      
      </div>
    );
  }
  -------------------------------------------------------------------
  const loading=false;
  const showName=true;
  {loading ?  <h1>Loading ...</h1> :  <h1>Hello {showName ? name: null}</h1>}
-------------------------------------------------------------------------
render(){
    const name='John Doe';
    const loading=false;
    const showName=true;

    return (
      <div className="App">
        {loading ?  <h1>Loading ...</h1> :  <h1>Hello {showName && name}</h1>}
      
      </div>
    );
  }