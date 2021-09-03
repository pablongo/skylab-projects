import React from 'react';
import { useSession } from 'next-auth/client';

export default function Home() {
  const [session] = useSession();
  return (
    <>
      <h1>Esto es el Home</h1>
    </>
  );
}
