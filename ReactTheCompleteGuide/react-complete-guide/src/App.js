import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>This is really working!!!</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
        <Person name="Stehphanie" age="26"/>
      </div>
    
    );
  }
}

export default App;
