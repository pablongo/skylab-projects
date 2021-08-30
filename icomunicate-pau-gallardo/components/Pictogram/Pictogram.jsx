import React from 'react';

export default function Pictogram(pictogram) {
  const { img, title } = pictogram;
  return (
    <figure>
      <img src={`${img}`} alt="" />
      <h2>{title}</h2>
    </figure>
  );
}
