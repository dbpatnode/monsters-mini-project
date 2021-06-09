import React, {Component} from 'react'
import {CardList} from '../src/components/card-list/card-list.jsx'
import {SearchBox} from '../src/components/search-box/search-box.jsx'
import './App.css';

// react class component syntax
class App extends Component {

// constructor way of setting up state
  constructor() {
    super();
    this.state ={
      monsters: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(users => 
          this.setState({monsters: users})
          )
    }

    handleChange = (e) =>{
      this.setState({searchField: e.target.value})
    }
  
  render () {
    const {monsters, searchField} = this.state; 
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
    <div className="App">
      <h1>MONSTER HUNT</h1>
      <SearchBox 
      placeholder="search monsters"
      handleChange={this.handleChange}
      />
      
      <CardList monsters={filteredMonsters} /> 
    </div>
  );
  }
}

export default App;
