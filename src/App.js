import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Person from "./Person/Person";
import Aux from "./hoc/Auxiliary";
import WithClass from "./hoc/WithClass";

class App extends Component {  

  initPersons = () => {    
    return ({
      persons: [
          {id: "er08152165", name: "Rainer Zufall", age:18},
          {id: "dsf65fse65", name: "Volker Racho", age:38},
          {id: "fd23445342", name: "Klara Sieger", age:58}
        ],
      showPersons: false      
      })
  }   
  state = this.initPersons();  

  restorePersonsHandler = () => {
    const persons = [...this.initPersons().persons];
    this.setState({persons: persons});    
  }

  togglePersonVisibilty = () => {
    this.setState({showPersons:!this.state.showPersons});
  }

  changedPersonHandler = (event, id) => {
    const persons = [...this.state.persons];
    
    const personIndex = persons.findIndex((person) => person.id === id);
    persons[personIndex].name = event.target.value;
    this.setState({persons:persons});
  }

  deletePersonHandler = (id) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex((person) => person.id === id);
    persons.splice(personIndex, 1);    
    this.setState({persons: persons});

  }

  renderPersons = () => { 
    const persons = [...this.state.persons];
    if(this.state.showPersons) {
      return (
          this.state.persons.map((person, index) => {
            return <Person name={person.name} age={person.age} delete={this.deletePersonHandler.bind(this, person.id)} change={(event) => this.changedPersonHandler(event, person.id)} />
      }))
    }
    else
      return null;
  }


  render() {
    const style = {
      backgroundColor:"green",
      color: "#fff",
      font: "inherit",
      border: "1px solid #ddd",
      padding: "8px",
      cursor: "pointer",
    }

    return (
      <WithClass class={classes.App}>
        <h1>Personenverwaltung</h1>  
        <button className={classes.button} onClick={this.togglePersonVisibilty}>Toggle</button>  
        <button className={classes.button} onClick={this.restorePersonsHandler}>Wiederherstellen</button> 
        <div className={classes.container}>        
          {this.renderPersons()}
        </div>        
      </WithClass>
    );
  }
}

export default App;
