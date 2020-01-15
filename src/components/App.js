import React, { Component } from 'react';
import '../stylesheet/App.css';
import { fetchAllCharacters } from '../services/Api.js';
import Header from './Header';
import CharacterList from './CharacterList';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      allCharacters: [],
    }
  }
  componentDidMount() {
    fetchAllCharacters()
      .then(characters => {
        this.setState({
          allCharacters: characters.results,
        })
        console.log(this.state.allCharacters);
      })
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <CharacterList allCharacters={this.state.allCharacters}/>
      </div>
    );
  }
}

export default App;
