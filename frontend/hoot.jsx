import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from '.store/store';
// import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  // const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to Hoot</h1>, root);
  // window.dispatch = store.dispatch
  window.$ = $ 
});
