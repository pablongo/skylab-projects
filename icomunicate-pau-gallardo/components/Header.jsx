import React from 'react';
import Link from 'next/link';

import { useSession, signIn, signOut } from 'next-auth/client';
import styles from '../styles/Header.module.scss';

export default function Header() {
  const [session] = useSession();

  return (
    <header className={styles.nav__container}>
      <h1 className={styles.nav__container__title}>iComunicate</h1>
      <nav className={styles.nav__container__navbar} data-testid="nav-bar">
        <Link href="/">
          <span className={styles.nav__container__navbar__button}>
            Home
          </span>
        </Link>
        <Link href="/dictionaries/61350f73cb53938c34ec9d4c">
          <span className={styles.nav__container__navbar__button}>
            Dictionaries
          </span>
        </Link>
        <Link href="/myPictograms">
          <span className={styles.nav__container__navbar__button}>
            My Pictograms
          </span>
        </Link>
        <Link href="/profile">
          <span className={styles.nav__container__navbar__button}>
            Profile
          </span>
        </Link>
        {session
          ? (
            <button
              type="button"
              className={styles.nav__container__navbar__button}
              onClick={signOut}
            >
              Logout
            </button>
          )
          : (
            <button
              type="button"
              className={styles.nav__container__navbar__button}
              onClick={signIn}
            >
              Login
            </button>
          )}

      </nav>
    </header>
  );
}
