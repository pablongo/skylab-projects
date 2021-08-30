import React from 'react';
import Header from '../components/Header/Header';
import Pictogram from '../components/Pictogram/Pictogram';

export default function dictionary({ pictogramList }) {
  return (
    <>
      <Header />
      <section>
        <div>
          <h2>Componente</h2>
          <h2>Componente</h2>
          <h2>Componente</h2>
          <h2>Componente</h2>
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
      <Pictogram pictogram={pictogramList[0]} />
    </>
  );
}

export async function getStaticProps() {
  let data = await fetch(
    'http://localhost:3000/api/dictionaryHandler?dictionaryId=612d27dee3e3cdc37a8f7ecf',
  );
  data = await data.json();
  return {
    props: data,
  };
}
