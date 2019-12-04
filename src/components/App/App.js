import React, { Component } from 'react';
import './App.scss';
import WelcomeForm from '../WelcomeForm/WelcomeForm.js';
import MoviePage from '../MoviePage/MoviePage.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'WelcomeForm',
      filmData: [],
      currentUser: {}
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
    .then(response => response.json())
    .then(data => {
      this.setState({ filmData: data.results });
    })
  }

  changePage = (page, userObj) => {
    this.setState({currentPage: page, currentUser: userObj});
  }

  renderLandingPage = () => {
    return (
      <div className="App welcome">
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
        <MoviePage filmData={this.state.filmData} changePage={this.changePage}/>
      </div>
    );
  }

  render(name) {
    const { currentPage } = this.state;
    if (currentPage === 'WelcomeForm') {
      return this.renderLandingPage();
    } else if (currentPage === 'MoviePage') {
      console.log(this.state.filmData);
      return this.renderMoviePage();
    }
  }
}

export default App;
