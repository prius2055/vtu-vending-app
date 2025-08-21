import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './Sign.css';

const userData = {
  email: '',
  password: '',
};

// const auth = getAuth();

const LogIn = () => {
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const [userLogin, setUserLogIn] = useState(userData);
  const [loginError, setLoginError] = useState(false);

  const dispatch = useDispatch();

  const showLoginForm = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const showRegisterForm = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const emailHandler = (e) => {
    setUserLogIn((prev) => ({ ...prev, email: e.target.value }));
  };

  const passwordHandler = (e) => {
    setUserLogIn((prev) => ({ ...prev, password: e.target.value.trim() }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !userLogin.email ||
      !userLogin.password
    ) {
      setLoginError(true);
      return;
    }

     try {
    const response = await fetch('http://localhost:5000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userLogin.email,
        password: userLogin.password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }

    console.log('User registered:', data);

    // Optionally store token in localStorage
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }

    // Redirect to login page after successful signup
    navigate('/dashboard');

  } catch (err) {
    console.error(err);
    setLoginError(true);
  }


  };

  return (
    <div className="overlay">
      {/* {loginError && <p className="error">The passwords do not match</p>} */}
      {loginError && (
        <div className="error-message">
          <p>Please check the form!</p>
          <ul>
            <li>Make Sure the first name and last name fields are not empty</li>
            <li>Make Sure the email field is not empty</li>
            <li>Make Sure the two password fields are not empty & matches</li>
          </ul>
        </div>
      )}

      <div className="sign-in">
        <div className="sign-in-hero">
          <p className="chatter">CHATTER</p>
          <p>
            Unleash the Power of Words, Connect with Like-minded Readers and
            Writers
          </p>
        </div>
        <div className="sign-in-form">
          <div className="sign-in-form-nav">
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              REGISTER
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              LOGIN
            </NavLink>
          </div>
          <form className="sign-in-form-area" onSubmit={handleSubmit}>
            <h2>Welcome back</h2>
            <label htmlFor="email">
              Email address
              <input type="email" id="email" name="email" onChange={emailHandler}/>
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                id="password"
                name="password"
                onChange={passwordHandler}
              />
            </label>
            <button className="account-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
