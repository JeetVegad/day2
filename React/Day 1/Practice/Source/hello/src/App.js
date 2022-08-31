import React, { Component } from 'react';
import './App.css';


 class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }
  changevalue = event => {
    this.setState({
      name: event.target.value
    })
  }
  render() {
    var msg1 = 'Greeting of the Day!!!';
    return (
      <div class="App">
        <h1>Hello</h1>
        <h1>{msg1}</h1>
        <label>Enter Name : </label>
        <input placeholder='Enter Name' onChange={this.changevalue}>
          </input>
          <p><b>Name : {this.state.name}</b></p>
      </div>
    )
  }
}

export default App;
