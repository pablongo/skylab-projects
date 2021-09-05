import { useSession } from 'next-auth/client';
import React, { useState } from 'react';
import styles from './createPictogram.module.scss';

export default function CreatePictogram() {
  const [session] = useSession();
  const [formData, setFormData] = useState();
  const placeholder = 'https://via.placeholder.com/150';

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
      email: session.user.email,
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
    <main className={styles.create__page}>
      <section className={styles.create__page__top}>
        <img className={styles.create__page__top__img} src={placeholder} alt="" />
        <button className={styles.create__page__top__btn} type="submit" onClick={() => submitHandler(formData)}>
          Save Changes
        </button>
      </section>
      <form className={styles.create__page__form}>
        <label htmlFor="image">
          <span>Image URL</span>
          <input type="text" id="image" onChange={handleFormData} />
        </label>
        <label htmlFor="title">
          <span>Pictogram title</span>
          <input type="text" id="title" onChange={handleFormData} />
        </label>
      </form>
    </main>
  );
}
