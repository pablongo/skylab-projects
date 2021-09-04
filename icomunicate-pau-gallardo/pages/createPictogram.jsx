import React from 'react';

export default function CreatePictogram() {
  async function submitHandler() {
    const data = {
      title: 'asdas',
      image: 'asdasdas',
    };
    await fetch('http://localhost:3000/api/handlers/pictogramHandler', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
  return (
    <>
      <h1>Create pictogram page</h1>
      <form>
        <button type="submit" onClick={submitHandler}>
          Save Changes
        </button>
        <label htmlFor="image">
          Image URL
          <input type="text" id="image" />
        </label>
        <label htmlFor="title">
          Pictogram title
          <input type="text" id="title" />
        </label>
      </form>
    </>
  );
}
