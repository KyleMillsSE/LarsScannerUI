import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import Router from '../router/Router';

class App extends React.PureComponent {
    render() {
      return (
        <Provider store={store}>
          <Router />
        </Provider>
      );
  }
}

export default App;
// https://www.bezkoder.com/react-hooks-redux-login-registration-example/
