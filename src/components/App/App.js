import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.scss';
import WelcomeForm from '../WelcomeForm/WelcomeForm.js';
import MoviePage from '../MoviePage/MoviePage.js';
import UserProfile from '../UserProfile/UserProfile.js';
import CharactersPage from '../CharactersPage/CharactersPage.js';
import Favorites from '../Favorites/Favorites.js';
import logo from '../../logo.svg';
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

  changePage = (page, userObj) => {
    this.setState({currentPage: page, currentUser: userObj});
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
    return (
      <div className="App">
        <header className="App-header">
          <NavLink id='favorite' to='/favorites'>{this.state.faveChaos.length}</NavLink>
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
            let movie = this.state.filmData.find(film => film.episode_id === parseInt(match.params.id));
            return <CharactersPage faves={this.state.faveChaos} currentMovie={movie} updateFave={this.updateFaves} />
          }}/>
          <Route exact path="/favorites" render={() => <Favorites faves={this.state.faveChaos} updateFave={this.updateFaves}/>} />
          <Route exact path="/" render={({ history }) =>
            <WelcomeForm history={history} changePage={this.changePage}/>} />
        </body>
      </div>
    );
  }
}

export default App;
