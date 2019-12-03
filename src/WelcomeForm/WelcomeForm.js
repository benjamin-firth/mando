import React, { Component } from 'react';

class WelcomeForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <form>
        <label>Name</label>
        <input placeHolder='Galactic Identifier'></input>
        <label>Quote</label>
        <input placeHolder='Do or do not, there is no try.'></input>
        <label>Experience Level</label>
        <select>
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