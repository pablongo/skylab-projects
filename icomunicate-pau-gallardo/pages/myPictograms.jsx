import React from 'react';

import { useSession, getSession } from 'next-auth/client';
import { getDictionaries } from '../lib/controllers/dinctionaries/dictionaries';

export default function myPictograms({ dictionaries }) {
  console.log(dictionaries);
  const [session] = useSession();
  return (
    <h1>My Pictograms</h1>

  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let dictionaries;
  if (session) {
    dictionaries = await getDictionaries();
    dictionaries = JSON.stringify(dictionaries);
  } else {
    dictionaries = JSON.stringify([]);
  }
  return {
    props: { dictionaries: JSON.parse(dictionaries) },
  };
}
