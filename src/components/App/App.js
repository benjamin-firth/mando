import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import WelcomeForm from '../WelcomeForm/WelcomeForm.js';
import MoviePage from '../MoviePage/MoviePage.js';
import UserProfile from '../UserProfile/UserProfile.js';
import CharactersPage from '../CharactersPage/CharactersPage.js';
import Favorites from '../Favorites/Favorites.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'WelcomeForm',
      filmData: [],
      currentUser: {},
      currentMovie: {},
      error: 'invisibleError',
      showUserProfile: false,
      faveChaos: []
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
    .then(response => response.json())
    .then(data => {
      this.setState({ filmData: data.results });
    })
  }

  changePage = (page, userObj, toggleUserProfile) => {
    this.setState({currentPage: page, currentUser: userObj});
    if (toggleUserProfile === 'hide') {
      this.setState({showUserProfile: false});
    }
  }

  filterMovie = (id) => {
    let movie = this.state.filmData.find(movie => parseInt(id) === movie.episode_id);
    this.setState({currentMovie: movie, currentPage: 'CharactersPage'});
  }

  handleImgClick = () => {
    this.setState({ showUserProfile: !this.state.showUserProfile })
  }

  updateFaves = (newChar) => {
    let isFave = this.state.faveChaos.find(fave => fave.name === newChar.name)
    if (isFave) {
      let initial = [...this.state.faveChaos];
      let index = initial.indexOf(isFave);
      initial.splice(index, 1);
      this.setState({ faveChaos: initial })
    } else {
      this.setState({ faveChaos: [...this.state.faveChaos, newChar] })
    }
  }

  render() {
    const { faveChaos, currentPage, showUserProfile, currentUser, filmData } = this.state;
    const getCharacters = (match) => {
      let movie = this.state.filmData.find(film => film.episode_id === parseInt(match.params.id));
      return <CharactersPage faves={this.state.faveChaos} currentMovie={movie} updateFave={this.updateFaves} />
    }

    return (
      <div className="App">
        <header className="App-header">
          {currentPage !== 'WelcomeForm' && 
            <NavLink id='favorite' to='/favorites'><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Dueling_lightsabers.svg/1280px-Dueling_lightsabers.svg.png"
            alt="Crossed Lightsabers"
            height="55"
            width="65"
          /></NavLink>}
          <h1>MANDO</h1>
          {currentPage !== 'WelcomeForm' && 
            <img
              onClick={() => this.handleImgClick()}
              src='https://i.ya-webdesign.com/images/mandalorian-helmet-png-4.png'
              alt='Mandalorian Helmet'
          />}
        </header>
        <main>
          {showUserProfile && 
            <UserProfile 
              changePage={this.changePage} 
              currentUser={currentUser} 
              handleImgClick={this.handleImgClick}/>}
            <Route path="/movie-page" render={() => {
              return <MoviePage
              filmData={filmData}
              filterMovie={this.filterMovie}
              />}} />
            <Route 
              path="/characters-page/:id" 
              render={({ match }) => getCharacters(match)}/>
            <Route 
              exact path="/favorites" 
              render={() => 
                <Favorites faves={faveChaos} updateFave={this.updateFaves}/>} />
            <Route exact path="/" render={({ history }) =>
              <WelcomeForm history={history} changePage={this.changePage}/>} />
        </main>
      </div>
    );
  }
}

export default App;
