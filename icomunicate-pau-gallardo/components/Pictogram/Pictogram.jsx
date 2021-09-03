import React from 'react';
import PropTypes from 'prop-types';
import { useSpeechSynthesis } from 'react-speech-kit';

import styles from './Pictogram.module.scss';

export default function Pictogram({ pictogram }) {
  const { img, text } = pictogram;
  const { speak } = useSpeechSynthesis();

  return (
    <button
      className={styles.button__container}
      type="button"
      onClick={() => speak({ text: `${text}` })}
    >
      <img className={styles.button__container__img} src={`${img}`} alt="" />
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
