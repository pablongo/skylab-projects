import { useSession } from 'next-auth/client';
import React, { useState } from 'react';
import styles from '../styles/createPictogram.module.scss';
import { storage } from '../firebase';

export default function CreatePictogram() {
  const [session] = useSession();
  const [formData, setFormData] = useState();
  const [image, setImage] = useState();
  const placeholder = 'https://via.placeholder.com/150';

  function handleFormData(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

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
          .then((url) => url);
      },
    );
  }

  async function submitHandler(data) {
    handleUpload();
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      title: data.title,
      image: data.image,
      email: session.user.email,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    await fetch('http://localhost:3000/api/handlers/pictogramHandler', requestOptions);
  }
  return (
    <section className={styles.create__page}>
      <img className={styles.create__page__img} src={placeholder} alt="" />
      <button className={styles.create__page__btn} type="submit" onClick={() => submitHandler(formData)}>
        Upload
      </button>
      <form className={styles.create__page__form}>
        <label className={styles.create__page__form__label} htmlFor="image">
          <span className={styles.create__page__form__label__text}>Image URL</span>
          <input className={styles.create__page__form__label__input} type="file" id="image" onChange={handleChange} />
        </label>
        <label htmlFor="title">
          <span className={styles.create__page__form__label__text}>Pictogram title</span>
          <input className={styles.create__page__form__label__input} type="text" id="title" onChange={handleFormData} />
        </label>
      </form>
    </section>
  );
}
