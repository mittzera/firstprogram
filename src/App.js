import './App.css';
import React from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx'; 
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: [],
      searchField: ''

    };
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({players: users }))

  }
  render(){

    const { players, searchField } = this.state;
    const filteredPlayers= players.filter(player => 
        player.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
    <div className="App">
      <h1> Monster Rolodex </h1>
    <SearchBox 
      placeholder='Search Monsters' 
      handleChange={e => this.setState({searchField: e.target.value})}
    />
    <CardList players={filteredPlayers} />
    

    </div>
    
  );
}


}


export default App;
