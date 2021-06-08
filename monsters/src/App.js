import React, {Component} from 'react'
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
      {
        this.state.monsters.map(monster => {
          console.log(monster)
          return <h1 key={monster.id}>{monster.name}</h1>
        })
      }
    </div>
  );
  }
}

export default App;
