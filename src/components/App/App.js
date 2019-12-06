import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
      currentMovie: {},
      error: 'invisibleError',
      showUserProfile: false
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
    // Refactor to base page logic on url instead of currentPage in state
    this.setState({currentPage: page, currentUser: userObj});
  }

  filterMovie = (id) => {
    let movie = this.state.filmData.find(movie => parseInt(id) === movie.episode_id);
    this.setState({currentMovie: movie, currentPage: 'CharactersPage'});
  }

  handleImgClick = () => {
    this.setState({ showUserProfile: !this.state.showUserProfile })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>MANDO</h1>
          {this.state.currentPage !== 'WelcomeForm' && <img 
            onClick={() => this.handleImgClick()} 
            src='https://i.ya-webdesign.com/images/mandalorian-helmet-png-4.png'
          />}
        {this.state.showUserProfile && <UserProfile currentUser={this.state.currentUser}/>}
        </header>
        <body>
          <Route path="/movie-page" render={() => {
            return <MoviePage 
            filmData={this.state.filmData} 
            filterMovie={this.filterMovie}
            />
          }} />
          {/* Change url paths to lower case with dashes in between */}
          <Route path="/characters-page/:id" render={({ match }) => {
            console.log(match, match.params);
            let movie = this.state.filmData.find(film => film.episode_id === parseInt(match.params.id));
            return <CharactersPage currentMovie={movie} />
          }}/>
          <Route exact path="/" render={({ history }) => 
            <WelcomeForm history={history} changePage={this.changePage}/>} />
        </body>
      </div>
    );
  }
}

export default App;
