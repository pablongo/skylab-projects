import React from 'react';

export default function CreatePictogram() {
  async function submitHandler() {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      title: 'Comer',
      image: 'https://ibb.co/8XKQnmG',
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://localhost:3000/api/handlers/pictogramHandler', requestOptions);
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
