import React from 'react';
import Link from 'next/link';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.nav__container}>
      <h1 className={styles.nav__container__title}>iComunicate</h1>
      <nav className={styles.nav__container__navbar}>
        <Link href="/">
          <span className={styles.nav__container__navbar__button}>
            Home
          </span>
        </Link>
        <Link href="/dictionary">
          <span className={styles.nav__container__navbar__button}>
            Global Dictionary
          </span>
        </Link>
        <Link href="/">
          <span className={styles.nav__container__navbar__button}>
            My Dictionary
          </span>
        </Link>
        <Link href="/">
          <span className={styles.nav__container__navbar__button}>
            Profile
          </span>
        </Link>
        <Link href="/">
          <span className={styles.nav__container__navbar__button}>
            Login
          </span>
        </Link>
      </nav>
    </header>
  );
}
