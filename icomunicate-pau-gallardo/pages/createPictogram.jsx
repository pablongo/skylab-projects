import React from 'react';

export default function CreatePictogram() {
  return (
    <>
      <section>
        <img src="" alt="" />
        <h2>Image tittle</h2>
        <div>
          <button type="button">Save changes</button>
          <button type="button">Delete pictogram</button>
        </div>
      </section>
      <section>
        <label htmlFor="browse-picture">
          Browse Picture
          <input type="text" id="browse-picture" />
        </label>
        <label htmlFor="text">
          Text
          <input type="text" id="text" />
        </label>
        <label htmlFor="gramatic-type">
          Gramar type
          <input type="text" id="gramatic-type" />
        </label>
        <label htmlFor="metadata">
          Metadata
          <input type="text" id="metadata" />
        </label>
      </section>
    </>
  );
}
