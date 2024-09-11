import { useEffect, useState } from 'react';
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
  // const logInHandler = (e) => {
  //   e.preventDefault();
  //   const data = new FormData();

  //   data.append('email', e.target.email.value);
  //   data.append('password', e.target.password.value);
  //   data.append('image', e.target.image.value);

  // };

  const logInHandler = (e) => {
    e.preventDefault();
    // const pix = e.target.files;
    const data = new FormData();

    // data.append('post[user_id]', formData.user_id);
    // data.append('post[author_name]', formData.author_name);
    data.append('post[topic]', e.target.topic.value);
    data.append('post[content]', e.target.content.value);
    data.append('post[post_image]', e.target.post_image.files[0]);

    //  const authToken = localStorage.getItem('token');

    fetch(`http://localhost:3001/api/v1/posts`, {
      method: 'POST',
      // headers: {
      //   'content-type': 'application/json',
      //   // authorization: 'authToken',
      // },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(`something went wrong ${error}`);
      });

    // setnewPost((prev) => ({
    //   ...prev,
    //   topic: '',
    //   content: '',
    // }));
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
          <form className="sign-in-form-area" onSubmit={logInHandler}>
            <h2>Welcome back</h2>
            <label htmlFor="topic">
              {/* Email address */}
              Topic
              <input type="topic" id="topic" name="topic" />
            </label>
            <label htmlFor="content">
              Content
              <textarea
                id="content"
                name="content"
                placeholder="Write a post..."
              ></textarea>
            </label>
            <label htmlFor="image">
              Upload image
              <input type="file" id="post_image" name="post_image" />
            </label>
            {/* <button className="account-btn">Log in</button> */}
            <button className="account-btn">Post</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
