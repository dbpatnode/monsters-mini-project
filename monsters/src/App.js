import React, {Component} from 'react'

import './App.css';

// react class component syntax
class App extends Component {

// constructor way of setting up state
  constructor() {
    super();
    this.state ={
      monsters: [
        {
          name: 'Dracula',
          id: 'eiwu'
        }, 
        {
          name: 'Swamp Monster',
          id: 'ewrwe'
        },  
        {
          name: 'The Thing',
          id: 'kljgfd'
        }, 
        {
          name: 'Killer Bee',
          id: 'gdfjlkas'
        }, 
      ]
    }

  }
  render () {
    return (
    <div className="App">
    {this.state.monsters.map(monster => {
      
      return <h1 key={monster.id}>{monster.name}</h1>
    })}
    </div>
  );
  }
}

export default App;
