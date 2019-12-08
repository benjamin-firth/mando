import React from 'react';
import './FilmScript.scss';
// import PropTypes from 'prop-types';

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

export default FilmScript;

// FilmScript.propTypes = {
//   filmscript: PropTypes.object.isRequired
// };