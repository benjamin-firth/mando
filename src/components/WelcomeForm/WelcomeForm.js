import React, { Component } from 'react';

class WelcomeForm extends Component {
  constructor() {
    super();
    this.state = {
      currentName: '',
      currentQuote: '',
      currentRank: 'padawan',
    };
  }

  handleChange(key, value) {
    this.setState({[key]: value});
    console.log(this.state)
  }

  render() {
    return(
      <form>
        <label>Name</label>
        <input 
          placeholder='Galactic Identifier' 
          name='currentName' 
          onChange={(e) => this.handleChange(e.target.name, e.target.value)}>
        </input>
        <label>Quote</label>
        <input 
          placeholder='Do or do not, there is no try.'
          name='currentQuote'
          onChange={(e) => this.handleChange(e.target.name, e.target.value)}>
        </input>
        <label>Experience Level</label>
        <select 
          name='currentRank' 
          onChange={(e) => this.handleChange(e.target.name, e.target.value)}>
          <option value='padawan'>Padawan</option>
          <option value='jediknight'>Jedi Knight</option>
          <option value='jedimaster'>Jedi Master</option>
        </select>
        <button>Enter, you must!</button>
      </form>
    )
  }
}

export default WelcomeForm;