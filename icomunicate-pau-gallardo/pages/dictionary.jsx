/* eslint-disable react/jsx-no-bind */
import React from 'react';
import Header from '../components/Header/Header';
import Pictogram from '../components/Pictogram/Pictogram';

export default function dictionary({ pictogramList }) {
  function handle(event) {
    console.log(event.target);
    console.log(event.target.type);
  }
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
      {pictogramList?.map((pictogram) => (
        <Pictogram pictogram={pictogram} handle={handle} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  let data = await fetch(
    'http://localhost:3000/api/dictionaryHandler?dictionaryId=612e809ee4c8d904cb4b2723',
  );
  data = await data.json();
  return {
    props: data,
  };
}
