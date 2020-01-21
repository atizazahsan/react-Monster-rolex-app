import React, { Component } from 'react';
import './App.css'
import { CardList } from './components/card-list/card-list';
import { Search } from './components/search-box/search';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters : [],
      searchfield : ''
    };
    
    // this.handleChange = this.handleChange.bind(this);
  
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }

  handleChange = (e) => {
    this.setState({ searchfield : e.target.value}) 
  }
 
  render() {
    const {monsters , searchfield} = this.state ;
    const monstersfilter = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchfield.toLowerCase() )
      )
    return (
      <div className="App">
      <h1> Monster Rolex</h1>
        <Search
          placeholder="Search Monsters" 
          handleChange = {this.handleChange}
        />
    
      <CardList monsters={monstersfilter}/> 
      </div>
    )
  }
}

export default App;
