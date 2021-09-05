import React from 'react';

import { useSession, getSession } from 'next-auth/client';
import { getDictionaries } from '../lib/controllers/dinctionaries/dictionaries';

export default function myPictograms() {
  const [session] = useSession();
  return (
    <h1>My Pictograms</h1>

  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let userPictogramList;
  if (session) {
    userPictogramList = await getDictionaries();
    userPictogramList = JSON.stringify(userPictogramList);
  } else {
    userPictogramList = JSON.stringify([]);
  }
  return {
    props: { userPictogramList: JSON.parse(userPictogramList) },
  };
}
