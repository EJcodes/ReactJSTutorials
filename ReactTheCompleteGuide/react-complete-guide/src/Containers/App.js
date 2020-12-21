import React, { Component } from 'react';
import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons'
import '../Containers/App.css';


class App extends Component {
  state={
    persons:[
      {id: 'asljdflask', name: 'Max', age: 28 },
      {id: '23u424' , name: 'Manu', age: 29},
      {id: 'u2389u2u34', name: 'Stephanie', age: 29}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // immutable ways for this function
    // const persons  = this.state.persons.slice();
    const persons = [...this.state.persons ]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    
    this.setState( {persons: persons} );
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
              key={person.id}
             age={person.age}
             changed={ (event) => this.nameChangeHandler(event, person.id) }/>
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
