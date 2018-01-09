import React from 'react';
import  { Provider } from 'react-redux';
import { Route, HashRouter, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionFormContainer from './session/session_form_container';
import AuthNavbarContainer from './auth_navbar/auth_nav_container';
import HomepageContainer from './homepage/homepage_container';
import BusinessIndexContainer from './businesses/business_index_container';
import BusinessShowContainer from './businesses/business_show_container';
import NavbarContainer from './navbar/navbar_container.jsx';
import ReviewFormContainer from './reviews/review_form_container';
// import SearchContainer from './search/search_container'


const App = () => (
  <div>
    <header >
      <AuthNavbarContainer />
    </header>

    <Switch>
      <Route exact path="/" component={HomepageContainer} />
      <Route path="/search" component={BusinessIndexContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/businesses/:businessId/reviews/new" component={ReviewFormContainer}/>
      <Route exact path="/businesses/:businessId" component={BusinessShowContainer}/>
    </Switch>
  </div>
);

export default App;
