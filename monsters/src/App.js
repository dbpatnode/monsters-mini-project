import React, {Component} from 'react'
import {CardList} from '../src/components/card-list/card-list.jsx'
import './App.css';

// react class component syntax
class App extends Component {

// constructor way of setting up state
  constructor() {
    super();
    this.state ={
      monsters: []
    }
  }

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(users => 
          this.setState({monsters: users})
          )
    }

  
  render () {
    return (
    <div className="App">
      <CardList monsters={this.state.monsters} /> 
    </div>
  );
  }
}

export default App;
