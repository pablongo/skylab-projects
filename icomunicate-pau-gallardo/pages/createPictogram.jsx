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
          <input type="text" id="browse-picture" />
        </label>
        <label htmlFor="text">
          <input type="text" id="browse-picture" />
        </label>
        <label htmlFor="gramatic-type">
          <input type="text" id="gramatic-type" />
        </label>
        <label htmlFor="metadata">
          <input type="text" id="metadata" />
        </label>
      </section>
    </>
  );
}
