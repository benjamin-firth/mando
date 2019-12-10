import React from 'react';
import PropTypes from 'prop-types';

export const FilmScript = ({ crawl, filmTitle }) => {
  return (
    <div className='FilmScript'>
      <div className="fade"></div>
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
              <h4>
                {filmTitle}
              </h4>
          </div>
          <p className='opening-text'>
            {crawl}
          </p>
        </div>
      </section>
    </div>
  )
};

FilmScript.propTypes = {
  crawl: PropTypes.string,
  filmTitle: PropTypes.string
}

export default FilmScript;
