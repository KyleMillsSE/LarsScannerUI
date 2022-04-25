import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const LoginComponent = React.lazy(() => import('./login/Login'));

function SuspenseComponent(Component) {
  return (
    <React.Suspense fallback={null}>
      <Component />
    </React.Suspense>
  );
}

class App extends React.PureComponent {
    render() {
      return (
        <Provider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={SuspenseComponent(LoginComponent)} />
            </Routes>
          </BrowserRouter>
        </Provider>
      );
  }
}

export default App;
