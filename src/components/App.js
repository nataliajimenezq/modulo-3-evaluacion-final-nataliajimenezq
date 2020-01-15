import React, { Component } from 'react';
import '../stylesheet/App.css';
import { fetchAllCharacters } from '../services/Api.js';
import Header from './Header';
import Search from './Search';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.renderCharacterDetail=this.renderCharacterDetail.bind(this);
    this.state = {
      allCharacters: [],
      value: ''
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

  renderCharacterDetail(props) {
    console.log(props)
    const id = props.match.params.id;
    console.log(id)
    return (
    <CharacterDetail 
    
    />)
  }


  render() {
    console.log(this.state.value)
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Search handleChange={this.handleChange} />
            <CharacterList
              allCharacters={this.state.allCharacters}
              value={this.state.value}
            />
          </Route>
          <Route path="/character:id" render={this.renderCharacterDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
