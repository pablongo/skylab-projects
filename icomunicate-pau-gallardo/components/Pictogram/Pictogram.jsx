import React from 'react';
import PropTypes from 'prop-types';

export default function Pictogram({ pictogram, handle }) {
  const { img, text } = pictogram;

  return (
    <button type="button" onClick={handle}>
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
