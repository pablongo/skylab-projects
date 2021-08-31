import React from 'react';
import Header from '../components/Header/Header';
import Pictogram from '../components/Pictogram/Pictogram';

export default function dictionary({ pictogramList }) {
  return (
    <>
      <Header />
      <section>
        <div>
          <Pictogram />
          <Pictogram />
          <Pictogram />
          <Pictogram />
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
      {pictogramList.map((pictogram) => (
        <Pictogram pictogram={pictogram} />
      ))}
    </>
  );
}

// REVISAR SI HACER STATIC GENERATION CON TODOS
// LOS CASOS A LA VEZ I GUARDARLOS EN UN OBJ SEGUN NOMBRE
export async function getStaticProps() {
  let data = await fetch(
    'http://localhost:3000/api/dictionaryHandler?dictionaryId=612e4f18816dbc1e93d5b321',
  );
  data = await data.json();
  return {
    props: data,
  };
}
