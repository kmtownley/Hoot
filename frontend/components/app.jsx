import React from 'react';
import  { Provider } from 'react-redux';
import { Route, HashRouter, Link, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import SessionFormContainer from './session/session_form_container';
import NavbarContainer from './navbar/navbar_container';
import HomepageContainer from './homepage/homepage_container';
import BusinessIndexContainer from './businesses/business_index_container';


const App = () => (
  <div>
    <header >

    </header>

    <Switch>
      <Route exact path="/" component={BusinessIndexContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
