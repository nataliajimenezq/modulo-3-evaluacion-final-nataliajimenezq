import React, { Component } from 'react';
import '../stylesheet/App.css';
import { fetchAllCharacters } from '../services/Api.js';
import Header from './Header';
import Search from './Search';
import CharacterList from './CharacterList';

class App extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    
    this.state = {
      allCharacters: [],
      value:''
    }

  }
  componentDidMount() {
    fetchAllCharacters()
      .then(characters => {
        this.setState({
          allCharacters: characters.results,
        })
        //console.log(this.state.allCharacters);
      })
  }

  //Controlo el formulario, se usa en el componente Search

  handleChange(value) {
    this.setState({
      value: value
    })
  }

  render() {
    console.log(this.state.value)
    return (
      <div className="App">
        <Header/>
        <Search handleChange={this.handleChange}/>
        <CharacterList 
          allCharacters={this.state.allCharacters}
          /* value={this.state.value} */
        />
      </div>
    );
  }
}

export default App;
