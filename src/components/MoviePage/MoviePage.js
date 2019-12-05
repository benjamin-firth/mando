import React from 'react';
import Movie from '../Movie/Movie';
//import the 7 movie photos...
//match each movie based on episode_id
const images = {
  1: 'https://media.proprofs.com/images/QM/user_images/1826446/1496915404.jpg',
  2: 'https://www.kickassfacts.com/wp-content/uploads/2015/12/Attack-of-the-Clones.jpg',
  3: 'https://i.kym-cdn.com/entries/icons/original/000/022/048/Revenge_of_the_Sith.jpg',
  4: 'https://www.gameaxis.com/wp-content/uploads/2018/12/maxresdefault1.jpg',
  5: 'https://i.ytimg.com/vi/vVulaCFNL4A/maxresdefault.jpg',
  6: 'https://i.ytimg.com/vi/AL2N4Bfl4Ec/maxresdefault.jpg',
  7: 'http://rwrant.co.za/wp-content/uploads/2014/02/Star-Wars-7.jpg'
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
    <section className="main">
      {movies}
    </section>
  )
}

export default MoviePage;
