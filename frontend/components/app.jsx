import React from 'react';
import  { Provider } from 'react-redux';
import { Route, HashRouter, Link } from 'react-router-dom';

import SessionFormContainer from './session/session_form_container';
import GreetingContainer from './greeting_form/greeting_container';


const App = () => (
  <div>
    <header>
      <Link to={'/'}></Link>
      <h1>Hoot</h1>
      <GreetingContainer />
    </header>

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
