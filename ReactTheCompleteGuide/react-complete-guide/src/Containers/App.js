import React, { Component } from 'react';
import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons'
import '../Containers/App.css';


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

  deletePersonHandler = (personIndex) => {
    const persons  = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
    let persons = null;
    let btnClass ='';

    if( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click ={() => this.deletePersonHandler(index)}
              name={person.name}
             age={person.age}/>
          })}
        </div>
      );
    }


    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>This is really is working!!!</p>
        <button
        onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div>
    
    );
  }
}

export default App;
