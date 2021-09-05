import React from 'react';
import PropTypes from 'prop-types';
import { useSpeechSynthesis } from 'react-speech-kit';

import styles from '../styles/Pictogram.module.scss';

export default function Pictogram({ pictogram }) {
  const { image, title } = pictogram;
  const { speak } = useSpeechSynthesis();

  return (
    <button
      className={styles.button__container}
      type="button"
      onClick={() => speak({ text: `${title}` })}
    >
      <img className={styles.button__container__img} src={`${image}`} alt="" />
      <h2 className={styles.button__container__title}>{title}</h2>
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
