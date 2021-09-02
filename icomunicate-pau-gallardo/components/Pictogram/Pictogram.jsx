import React from 'react';
import PropTypes from 'prop-types';

export default function Pictogram({ pictogram }) {
  const { img, text } = pictogram;

  return (
    <button type="button">
      <img src={`${img}`} alt="" />
      <h2>{text}</h2>
    </button>
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