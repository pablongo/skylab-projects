import React from 'react';

export default function dictionary() {
  return (
    <>
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
    </>
  );
}
