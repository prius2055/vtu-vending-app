import { useEffect, useState } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './Sign.css';

const userData = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
};

// const auth = getAuth();

const SignUp = () => {
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const [userLogin, setUserLogIn] = useState(userData);
  const [loginError, setLoginError] = useState(false);

  const [authUser, setAuthUser] = useState(null);

  const dispatch = useDispatch();

  const showLoginForm = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const showRegisterForm = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const firstNameHandler = (e) => {
    setUserLogIn((prev) => ({ ...prev, firstname: e.target.value }));
  };

  const lastNameHandler = (e) => {
    setUserLogIn((prev) => ({ ...prev, lastname: e.target.value }));
  };



  const emailHandler = (e) => {
    setUserLogIn((prev) => ({ ...prev, email: e.target.value }));
  };

  const passwordHandler = (e) => {
    setUserLogIn((prev) => ({ ...prev, password: e.target.value.trim() }));
  };

  const confirmPasswordHandler = (e) => {
    setUserLogIn((prev) => ({
      ...prev,
      confirmPassword: e.target.value.trim(),
    }));
  };




 const handleSubmit = async (e) => {
  e.preventDefault();

  // Simple form validation before sending request
  if (
    !userLogin.firstname ||
    !userLogin.lastname ||
    !userLogin.email ||
    !userLogin.password ||
    userLogin.password !== userLogin.confirmPassword
  ) {
    setLoginError(true);
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: userLogin.firstname,
        lastname: userLogin.lastname,
        email: userLogin.email,
        password: userLogin.password,
        confirmPassword: userLogin.confirmPassword,
      }),
    });



    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }

  

    // Optionally store token in localStorage
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }

    // Redirect to login page after successful signup
    navigate('/dashboard');
      console.log('User registered:', data);

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
          <p className="vtu">VTU-vend</p>
          <p>
            Log in for exclusive offers and a seamless experience. Enjoy premium
            connectivity with us.
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
            <h2>Register here</h2>
            <div className="name-field">
              <label className="first-name-label">
                First name
                <input
                  name="firstname"
                  type="text"
                  onChange={firstNameHandler}
                  value={userLogin.firstname}
                />
              </label>
              <label>
                Last name
                <input
                  type="text"
                  onChange={lastNameHandler}
                  value={userLogin.lastname}
                />
              </label>
            </div>

            <label>
              Email address
              <input
                type="email"
                onChange={emailHandler}
                value={userLogin.email}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                onChange={passwordHandler}
                value={userLogin.password}
              />
            </label>
            <label>
              Confirm password
              <input
                type="password"
                onChange={confirmPasswordHandler}
                value={userLogin.confirmPassword}
              />
            </label>
            <button
              className="account-btn"
              type="submit"
            >
              Create account
            </button>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
