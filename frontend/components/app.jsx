import React from 'react';
import  { Provider } from 'react-redux';
import { Route, HashRouter, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import SessionFormContainer from './session/session_form_container';
import GreetingContainer from './greeting_form/greeting_container';


const App = () => (
  <div>
    <header>
      <Link to={'/'}></Link>
      <h1>Hoot</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
