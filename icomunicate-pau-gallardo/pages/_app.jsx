import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';

import Header from '../components/Header/Header';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={configureStore()}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
