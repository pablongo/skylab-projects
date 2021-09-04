import React, { useState } from 'react';

export default function CreatePictogram() {
  const [formData, setFormData] = useState();

  function handleFormData(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  async function submitHandler(data) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      title: data.title,
      image: data.image,
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
        <button type="submit" onClick={() => submitHandler(formData)}>
          Save Changes
        </button>
        <label htmlFor="image">
          Image URL
          <input type="text" id="image" onChange={handleFormData} />
        </label>
        <label htmlFor="title">
          Pictogram title
          <input type="text" id="title" onChange={handleFormData} />
        </label>
      </form>
    </>
  );
}
