import React from 'react';

export default function CreatePictogram() {
  return (
    <>
      <h1>Create pictogram page</h1>
      <form action="">
        <button type="button">
          Save Changes
        </button>
        <label htmlFor="">
          Image URL
          <input type="text" />
        </label>
        <label htmlFor="">
          Pictogram title
          <input type="text" />
        </label>
      </form>
    </>
  );
}
