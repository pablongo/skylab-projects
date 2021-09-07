import { useSession } from 'next-auth/client';
import React, { useState } from 'react';
import styles from '../styles/createPictogram.module.scss';

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

    await fetch('http://localhost:3000/api/handlers/pictogramHandler', requestOptions);
  }
  return (
    <section className={styles.create__page}>
      <img className={styles.create__page__img} src={placeholder} alt="" />
      <button className={styles.create__page__btn} type="submit" onClick={() => submitHandler(formData)}>
        Save Changes
      </button>
      <form className={styles.create__page__form}>
        <label className={styles.create__page__form__label} htmlFor="image">
          <span className={styles.create__page__form__label__text}>Image URL</span>
          <input className={styles.create__page__form__label__input} type="text" id="image" onChange={handleFormData} />
        </label>
        <label htmlFor="title">
          <span className={styles.create__page__form__label__text}>Pictogram title</span>
          <input className={styles.create__page__form__label__input} type="text" id="title" onChange={handleFormData} />
        </label>
      </form>
    </section>
  );
}
