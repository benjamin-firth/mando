import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.scss';
import WelcomeForm from '../WelcomeForm/WelcomeForm.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'Landing',
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            MANDO
          </h1>
        </header>
        <WelcomeForm />
      </div>
    );
  }
}

export default App;
