import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Profile() {
  const [session, loading] = useSession();
  console.log(session);
  return (
    <>
      <h1>This is a profile</h1>
      <section>
        {!session
        && <h2>You arent logged in</h2>}
        {session
        && (
        <>
          <h2>{`Hi ${session.user.name}!`}</h2>
          <img src={`${session.user.image}`} alt="" />
        </>
        )}
      </section>
    </>
  );
}
