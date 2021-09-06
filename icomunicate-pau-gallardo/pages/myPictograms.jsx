import React from 'react';
import { useSession, getSession } from 'next-auth/client';
import { useRouter } from 'next/router';

import User from '../models/userModel';
import Pictogram from '../components/Pictogram';
import CreatePictogram from '../components/createPictogram';

export default function myPictograms({ userPictogramList }) {
  const [session] = useSession();

  return (
    <>
      {session && <CreatePictogram />}
      <section>
        {userPictogramList?.map((pictogram) => (
          <Pictogram pictogram={pictogram} />
        ))}
      </section>
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
