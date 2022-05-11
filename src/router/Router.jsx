import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const LoginComponent = React.lazy(() => import('../components/login/Login'));
const LayoutComponent = React.lazy(() => import('../components/layout/Layout'));
const DasboardComponent = React.lazy(() => import('../components/dashboard/Dashboard'));

function SuspenseComponent(Component) {
  return (
    <React.Suspense fallback={null}>
      <Component />
    </React.Suspense>
  );
}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={SuspenseComponent(LoginComponent)} />
        <Route path="/" element={SuspenseComponent(LayoutComponent)}>
          <Route path="dashboard" element={SuspenseComponent(DasboardComponent)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
