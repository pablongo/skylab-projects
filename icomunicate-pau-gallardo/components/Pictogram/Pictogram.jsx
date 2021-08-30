import React from 'react';

export default function Pictogram({ pictogram }) {
  const { img, text } = pictogram;
  return (
    <figure>
      <img src={`${img}`} alt="" />
      <h2>{text}</h2>
    </figure>
  );
}
