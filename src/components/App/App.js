import React from 'react';
import logo from '../../logo.svg';
import './App.scss';
import WelcomeForm from '../WelcomeForm/WelcomeForm.js'

function App() {
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

export default App;
