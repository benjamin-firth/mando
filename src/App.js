import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          MANDO
        </h1>
      </header>
      <section className="main">
        Waddup - Here's the container for movies
        <article className="movie">
          <div>
            <h2>Title</h2>
            <p>Episode #</p>
            <p>Release Year</p>
            <button type="button">View Characters</button>
          </div>
          <img src={logo} className="movie-picture" alt="Movie Poster" />
        </article>
        <article className="movie">
          <div>
            <h2>Title</h2>
            <p>Episode #</p>
            <p>Release Year</p>
            <button type="button">View Characters</button>
          </div>
          <img src={logo} className="movie-picture" alt="Movie Poster" />
        </article>
      </section>
    </div>
  );
}

export default App;
