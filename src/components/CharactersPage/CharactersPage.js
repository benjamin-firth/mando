import React, { Component } from 'react';

class CharactersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: props.currentMovie.characters
    }
  }

  findCharacters = () => {
    let firstTen = []
    let i = 0;
    while (i < 10) {
      firstTen.push(this.state.characters[i]);
      i++;
    }
    this.setState({ characters: firstTen });
    console.log('fuck yeah', this.state);
  }

  componentDidMount() {
    this.findCharacters();
  }

  render() {

    return (
      <h1>Hell yeah brutherrrrrr....</h1>
    )
  }
}

export default CharactersPage;