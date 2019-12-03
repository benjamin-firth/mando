import React, { Component } from 'react';
import './WelcomeForm.scss';


class WelcomeForm extends Component {
  constructor() {
    super();
    this.state = {
      currentName: '',
      currentQuote: '',
      currentRank: 'padawan',
      errorMsg: 'invisibleError'
    };
  }

  handleChange = (key, value) => {
    this.setState({[key]: value});
    console.log(this.state)
  }

  errorCheck = () => {
    const { currentName, currentQuote } = this.state;
    if (currentName === '' || currentQuote === '') {
      this.setState({errorMsg: 'visibleError'});
    } 
  }

  render() {
    return(
      <form className='main'>
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
        <button type='button' onClick={this.errorCheck}>Enter, you will!</button>
        <p className={this.state.errorMsg}>Enter all forms correctly, you must!</p>
      </form>
    )
  }
}

export default WelcomeForm;