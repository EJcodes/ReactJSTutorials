import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state={
    persons:[
      { name: 'Max', age: 28 },
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 29}
    ]
  }

  switchNameHandler = () => {
    // console.log('was clicked!');
    // Dont do this: this.state.persons[0].name="Evan";
    this.setState( {
      persons: [
        { name: 'Evan', age: 28 },
        {name: 'Manu', age: 29 },
        {name: 'Stephanie', age: 27 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>This is really working!!!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    
    );
  }
}

export default App;
