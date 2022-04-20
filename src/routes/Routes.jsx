import React from 'react';
import { Router, Route } from 'react-router-dom';

const LoginComponent = React.lazy(() => import('../components/login/Login'));

const Routes = function RouteComponent() {
  <Router>
    <Route component={LoginComponent} />
  </Router>;
};

export default Routes;
