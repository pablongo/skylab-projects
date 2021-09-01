import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={configureStore()}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
