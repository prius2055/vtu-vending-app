import { useEffect, useState } from 'react';
import { setUser } from '../store/postSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './Sign.css';

const userData = {
  firstname: '',
  lastname: '',
  role: '',
  email: '',
  image: '',
  loggedIn: false,
  registrationDate: '',
  userFeeds: [
    {
      feedId: 'post1',
      feedTopic: 'Software Engineering',
      feedIntro: 'Software...',
      feedDate: '',
      feedContent: {
        content: ' ',
        img: '',
        video: '',
      },
    },
  ],
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

  const roleHandler = (e) => {
    setUserLogIn((prev) => ({ ...prev, role: e.target.value }));
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

  // HANDLE FORM FOR NEW REGISTRATION
  // WITH GOOGLE EMAIL/PASSWORD SIGN UP
  const signUpHandler = (e) => {
    e.preventDefault();
  };

  //WITH GOOGLE SIGN UP
  const googleSignUpHandler = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider);
  };

  // HANDLE FORM FOR EXISTING USERS
  const logInHandler = async (e) => {
    e.preventDefault();
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

          <div className="sign-in-form-area">
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
              onClick={signUpHandler}
            >
              Create account
            </button>
            <button className='btn-google' onClick={googleSignUpHandler} type="submit">
              Sign up with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
