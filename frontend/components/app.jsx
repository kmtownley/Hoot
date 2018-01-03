import React from 'react';
import  { Provider } from 'react-redux';
import { Route, HashRouter, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import SessionFormContainer from './session/session_form_container';
import NavbarContainer from './navbar/navbar_container';


const App = () => (
  <div>
    <header >
      <Link to={'/'}></Link>
      <h1 className="hoot-logo"></h1>
      <NavbarContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
