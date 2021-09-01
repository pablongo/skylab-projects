import React from 'react';

import Pictogram from '../components/Pictogram/Pictogram';

export default function dictionary({ pictogramList }) {
  return (
    <>
      <section>
        <div>
          <h1>Diccionario 1</h1>
          <h1>Diccionario 2</h1>
          <h1>Diccionario 3</h1>
          <h1>Diccionario 4</h1>
        </div>
        <button type="button">
          Add new pictogram
        </button>
      </section>
      <label htmlFor="search-pictogram">
        <input
          type="text"
          placeholder="Search pictogram"
          id="search-pictogram"
        />
      </label>
      {pictogramList?.map((pictogram) => (
        <Pictogram pictogram={pictogram} />
      ))}
    </>
  );
}

// Esto esta mal, hay que conectarse directamente a la base de datos
export async function getStaticProps() {
  let data = await fetch(
    'http://localhost:3000/api/dictionaryHandler?dictionaryId=612e809ee4c8d904cb4b2723',
  );
  data = await data.json();
  return {
    props: data,
  };
}
