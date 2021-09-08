import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBWjithVk1pb77Pf3kGsPXP-I_3LJEXkmE',
  authDomain: 'icomunicate-ae705.firebaseapp.com',
  projectId: 'icomunicate-ae705',
  storageBucket: 'icomunicate-ae705.appspot.com',
  messagingSenderId: '688540433013',
  appId: '1:688540433013:web:027ef9cb27518b496ed63c',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();

export { storage, firebase as default };
