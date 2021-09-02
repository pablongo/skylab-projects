import React from 'react';
import PropTypes from 'prop-types';
import { useSpeechSynthesis } from 'react-speech-kit';

export default function Pictogram({ pictogram }) {
  const { img, text } = pictogram;
  const { speak } = useSpeechSynthesis();

  return (
    <button
      type="button"
      onClick={() => speak({ text: `${text}` })}
    >
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
