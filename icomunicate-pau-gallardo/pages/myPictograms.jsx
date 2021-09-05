import React from 'react';

import { useSession, getSession } from 'next-auth/client';

import User from '../models/userModel';

export default function myPictograms({ userPictogramList }) {
  const [session] = useSession();
  return (
    <h1>My Pictograms</h1>

  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let foundUser;
  let userPictogramList;
  if (session) {
    foundUser = await User.findOne({ email: session.user.email });
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
