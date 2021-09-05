import React from 'react';
import Link from 'next/link';
import { useSession, getSession } from 'next-auth/client';

import User from '../models/userModel';

import Pictogram from '../components/Pictogram/Pictogram';

export default function myPictograms({ userPictogramList }) {
  console.log(userPictogramList);
  const [session] = useSession();
  return (
    <>
      <h1>My Pictograms</h1>
      {userPictogramList?.map((pictogram) => (
        <Pictogram pictogram={pictogram} />
      ))}
      <Link href="/createPictogram">Create new pictogram</Link>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let foundUser;
  let userPictogramList;
  if (session) {
    foundUser = await User.findOne({ email: session.user.email }).populate('userPictogramList');
    if (!foundUser) {
      const newUser = {
        name: session.user.name,
        email: session.user.email,
        userPictogramList: [],
      };
      foundUser = await User.create(newUser);
    }
    userPictogramList = foundUser.userPictogramList;
  } else {
    userPictogramList = [];
  }
  userPictogramList = JSON.stringify(userPictogramList);
  return {
    props: { userPictogramList: JSON.parse(userPictogramList) },
  };
}
