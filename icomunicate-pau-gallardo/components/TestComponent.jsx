import React, { useState } from 'react';
import { storage } from '../firebase';

export default function TestComponent() {
  const [image, setImage] = useState();

  function handleChange(event) {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  }

  function handleUpload() {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => console.log(url));
      },
    );
  }

  return (
    <>
      <input type="file" onChange={handleChange} />
      <button type="button" onClick={handleUpload}>Upload</button>
    </>
  );
}
