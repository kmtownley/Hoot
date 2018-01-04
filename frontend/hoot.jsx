import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


import { signup, login, logout } from './actions/business_actions';
import { fetchBusinesses } from
'./util/business_api_util';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);

  window.$ = $;
  window.dispatch = store.dispatch;
  window.getState = store.dispatch;
  window.fetchBusinesses = fetchBusinesses;

});
