import React from 'react';
import  { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';

import SessionFormContainer from './session/session_form_container';


const App = () => (
  <div>
    <header>
      <h1>Hoot</h1>
    </header>

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
