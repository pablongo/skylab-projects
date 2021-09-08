import React from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

export default function Test() {
  const firebaseConfig = ({
    apiKey: 'AIzaSyBWjithVk1pb77Pf3kGsPXP-I_3LJEXkmE',
    authDomain: 'icomunicate-ae705.firebaseapp.com',
    projectId: 'icomunicate-ae705',
    storageBucket: 'icomunicate-ae705.appspot.com',
    messagingSenderId: '688540433013',
    appId: '1:688540433013:web:027ef9cb27518b496ed63c',
  });

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const db = firebase.firestore();

  db.collection('users').add({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });

  return (
    <h1>esto es un test</h1>
  );
}
