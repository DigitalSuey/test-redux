// import index from './js/'

//getState()
//subscribe()
//dispatch()
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './js/store';
// import App from './App';
import App from "./js/components/App.jsx";
import * as serviceWorker from './serviceWorker';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
