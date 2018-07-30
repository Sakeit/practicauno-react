import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';

class App extends Component {

constructor( ){
super();

this.state = {
  tasks: ["Tarea 1", "Tarea 2"]
}

}
 render() {
  // const names=["Alexis","Sakeit", "Jason"]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
     {/*names.map(name =>
      <Welcome  name={name} />
     )*/}
        <ul>
          {this.state.tasks.map(task =>
          <li>{task}</li>
          )}
          </ul>
      <button onClick={this.addTask.bind(this)}>Agrega un elemento </button>
        <button onClick={this.updateTask.bind(this)}> Modifica elemento </button>
      </div>
    );
  }
  addTask(){
    this.setState({
      tasks: this.state.tasks.concat("Nuevo elemento")
    });
  }

  updateTask(){
    const index = this.state.tasks.findIndex(task=>
    task === "Tarea 2"
    );

    this.setState({
      tasks: this.state.tasks.map((task, i) =>
      i === index ? "Actualizado" : task
    )
    })
  }
}

export default App;
