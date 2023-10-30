// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validUsernames = [    { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' },
];

  const handleLogin = () => {
    const user = validUsernames.find((user) => user.username === username && user.password === password);

    if (user) {
      // Navigate to the '/home' route upon successful login
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };
  const handleAdduser = () => {
   
      // Navigate to the '/home' route upon successful login
      navigate('/Registration');
  
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <button type="button" onClick={handleLogin}>
          Submit
        </button>
        &nbsp; &nbsp;
        <button type="button" onClick={handleAdduser}>
          Add Users
        </button>
      </form>
      <p style={{ color: 'red' }}>{error}</p>
    </div>
  );
};

export default Login;
