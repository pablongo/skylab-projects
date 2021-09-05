import React from 'react';
import Link from 'next/link';

import { useSession, signIn, signOut } from 'next-auth/client';
import styles from './Header.module.scss';

export default function Header() {
  const [session, loading] = useSession();
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
