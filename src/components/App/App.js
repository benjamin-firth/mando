import React, { Component } from 'react';
import './App.scss';
import WelcomeForm from '../WelcomeForm/WelcomeForm.js';
import MoviePage from '../MoviePage/MoviePage.js';
import UserProfile from '../UserProfile/UserProfile.js';
import CharactersPage from '../CharactersPage/CharactersPage.js'
// import Loading from '../Loading/Loading.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'WelcomeForm',
      filmData: [],
      currentUser: {},
      currentMovie: {}
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

  filterMovie = (id) => {
    let movie = this.state.filmData.find(movie => parseInt(id) === movie.episode_id);
    this.setState({currentMovie: movie, currentPage: 'CharactersPage'});
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
        <UserProfile currentUser={this.state.currentUser}/>
        <MoviePage 
          filmData={this.state.filmData} 
          filterMovie={this.filterMovie}
        />
      </div>
    );
  }

  render() {
    const { currentPage } = this.state;
    if (currentPage === 'WelcomeForm') {
      return this.renderLandingPage();
    } else if (currentPage === 'MoviePage') {
      return this.renderMoviePage();
    } else if (currentPage === 'CharactersPage') {
      return <CharactersPage currentMovie={this.state.currentMovie} />
    }
    // return <Loading />
  }
}

export default App;
