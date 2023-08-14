
import './App.css';
import Table from './Table';
import React, { Component } from 'react';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {

 state={
  characters : [
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    },
  ]

 } 
 handleSubmit = (character) => {
  this.setState({ characters: [...this.state.characters, character] })
}
 removeCharacter = (index) => {
  const { characters } = this.state

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
  })
}

  render() {
    const { characters } = this.state
    return (
      <div className="container">
        <Form handleSubmit={this.handleSubmit}/>
        <Table  characterData={characters} removeCharacter={this.removeCharacter}/>
      </div>
    )
  }
}


export default App;
