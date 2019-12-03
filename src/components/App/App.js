import React, { Component } from 'react';
import './App.scss';
import WelcomeForm from '../WelcomeForm/WelcomeForm.js';
import MoviePage from '../MoviePage/MoviePage.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'WelcomeForm',
    };
  }

  changePage = (page) => {
    this.setState({currentPage: page});
    console.log(this.state);
  }

  renderLandingPage = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            MANDO
          </h1>
        </header>
        <WelcomeForm changePage={this.changePage}/>
      </div>
    );
  }

  renderMoviePage = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            MANDO
          </h1>
        </header>
        <MoviePage changePage={this.changePage}/>
      </div>
    );
  }

  render(name) {
    const { currentPage } = this.state;
    if (currentPage === 'WelcomeForm') {
      return this.renderLandingPage();
    } else if (currentPage === 'MoviePage') {
      return this.renderMoviePage();
    }
  }
}

export default App;
