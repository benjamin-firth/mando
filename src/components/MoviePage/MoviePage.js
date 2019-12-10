import React from 'react';
import Movie from '../Movie/Movie';
import ep1 from '../../images/ep1.jpg';
import ep2 from '../../images/ep2.jpg';
import ep3 from '../../images/ep3.jpg';
import ep4 from '../../images/ep4.jpg';
import ep5 from '../../images/ep5.jpg';
import ep6 from '../../images/ep6.jpg';
import ep7 from '../../images/ep7.jpg';

const images = {
  1: ep1,
  2: ep2,
  3: ep3,
  4: ep4,
  5: ep5,
  6: ep6,
  7: ep7
}

const MoviePage = ({ filmData, filterMovie }) => {
  const movies = filmData.sort((a, b) => a.episode_id - b.episode_id)
  .map(film => {
    return (
    <Movie
      image={images[film.episode_id]}
      key={film.episode_id}
      title={film.title}
      episode={film.episode_id}
      release={film.release_date}
      opening={film.opening_crawl}
      filterMovie={filterMovie}
    />
  )
});

  return (
    <section className="movie-container">
      {movies}
    </section>
  )
}

export default MoviePage;
