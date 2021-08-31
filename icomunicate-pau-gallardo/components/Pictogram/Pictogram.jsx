import React from 'react';
import PropTypes from 'prop-types';

export default function Pictogram({ pictogram }) {
  const { img, text } = pictogram;

  return (
    <figure>
      <img src={`${img}`} alt="" />
      <h2>{text}</h2>
    </figure>
  );
}

Pictogram.defaultProps = {
  pictogram: [],
};

Pictogram.propTypes = {
  pictogram: {
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  },
};
