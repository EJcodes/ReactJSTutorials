import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state={
    persons:[
      { name: 'Max', age: 28 },
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 29}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // Dont do this: this.state.persons[0].name="Evan";
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        {name: 'Manu', age: 29 },
        {name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangeHandler = (event) =>{
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29},
        { name: 'Stephanie', age: 27}
      ]
    } )
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const btnStyle ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer' 
    };

    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>This is really is working!!!</p>
        <button
        style={btnStyle}
        onClick={this.togglePersonHandler}>Switch Name</button>
        {this.state.showPersons ?
          <div >
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Evan')}
          changed={this.nameChangeHandler}
          >My Hobbies: racing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div> : null }
      </div>
    
    );
  }
}

export default App;
