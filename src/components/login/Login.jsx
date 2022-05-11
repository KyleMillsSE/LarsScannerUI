import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createSession } from '../../reducers/Users/users';

const Login = function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createSession({ username, password }));
    navigate('/dashboard');
  };

  return (
    <div className="login">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            Username:
            <input type="text" value={username} onChange={onChangeUsername} name="username" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input type="password" value={password} onChange={onChangePassword} name="password" />
          </label>
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login;
