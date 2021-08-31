import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="nav-container">
      <h1 className="nav-container__tittle">iComunicate</h1>
      <nav className="nav-container__navbar">
        <Link href="/">Home</Link>
        <Link href="/dictionary">Global Dictionary</Link>
        <Link href="/">My Dictionary</Link>
        <Link href="/">Profile</Link>
        <Link href="/">Login</Link>
      </nav>
    </header>
  );
}
