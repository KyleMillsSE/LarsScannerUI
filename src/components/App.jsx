import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const LoginComponent = React.lazy(() => import('./login/Login'));

function SuspenseComponent(Component) {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}

class App extends React.PureComponent {
    render() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={SuspenseComponent(LoginComponent)} />
          </Routes>
        </BrowserRouter>
      );
  }
}

export default App;
