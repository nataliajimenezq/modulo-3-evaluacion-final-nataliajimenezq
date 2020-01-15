import React, { Component } from 'react';
import '../stylesheet/App.css';
import { fetchAllCharacters } from '../services/Api.js'

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      allCharacters: [],
      value: '',
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
        Probando...
      </div>
    );
  }
}

export default App;
