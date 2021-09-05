import React from 'react';
import Link from 'next/link';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.nav__container}>
      <h1 className={styles.nav__container__title}>iComunicate</h1>
      <nav className={styles.nav__container__navbar} data-testid="nav-bar">
        <Link href="/">
          <span className={styles.nav__container__navbar__button}>
            Home
          </span>
        </Link>
        <Link href="/dictionaries/612e809ee4c8d904cb4b2723">
          <span className={styles.nav__container__navbar__button}>
            Dictionaries
          </span>
        </Link>
        <Link href="/">
          <span className={styles.nav__container__navbar__button}>
            My Dictionaries
          </span>
        </Link>
        <Link href="/profile">
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
