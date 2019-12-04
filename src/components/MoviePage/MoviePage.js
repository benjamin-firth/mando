import React from 'react';
import Movie from '../Movie/Movie';

const MoviePage = ({ filmData }) => {
  const movies = filmData.sort((a, b) => a.episode_id - b.episode_id)
  .map(film => {
    return (
    <Movie
      key={film.episode_id}
      title={film.title}
      episode={film.episode_id}
      release={film.release_date}
      opening={film.opening_crawl}
    />
  )
});

  return (
    <section className="main">
      Waddup - Here's the container for movies
      {movies}
    </section>
  )
}

export default MoviePage;
