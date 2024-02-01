import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faEnvelopeOpen,
  faUser,
  faBell,
} from '@fortawesome/free-regular-svg-icons';
import { faUserGroup, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import feedImage from '../img/feed.png';
import chartImage from '../img/chart.png';
import Header from './Header';

import './Navigation.css';

export default function Nagivation() {
  const { usersArray, isLoading, loadingError } = useSelector(
    (store) => store.users
  );

  console.log(usersArray);

  // const loggedInUser = usersArray.filter(
  //   (user) =>
  //     user.email === currentUser.email && user.password === currentUser.password
  // );

  return (
    <div className="navigation-group">
      <NavLink to="/" className="logo">
        VTU-vend
      </NavLink>

      {/* {usersArray.map((user) => (
        <nav className="navigation">
          <ul className="navbar">
            <li>
              Welcome, <span>{user.firstname}</span>
            </li>
            <li>
              <NavLink to="/newpost">Write a post</NavLink>
            </li>
          </ul>
          <button type="button">Sign out</button>
        </nav>
      ))} */}

      <nav className="navigation">
        <div className="navbar">
          <NavLink to="/dashboard">
            <h3>Dashboard</h3>
          </NavLink>

          <div>
            <NavLink to="/member" className="trending">
              <FontAwesomeIcon icon={faArrowTrendUp} />
              <h3>Buy Data</h3>
            </NavLink>

            <ul className="trending-list">
              <li>Programming</li>
              <li>Data science</li>
              <li>Technology</li>
              <li>Machine learning</li>
              <li>Politics</li>
              <li>See all</li>
            </ul>
          </div>
          <div>
            <NavLink>Buy Airtime</NavLink>
            {/* <ul>
              <li className="list-group">
                <FontAwesomeIcon icon={faUser} />
                <li>Account</li>
              </li>
              <li className="list-group">
                <FontAwesomeIcon icon={faBell} />
                <li>Notifications</li>
              </li>
              <li>
                <li>Log Out</li>
              </li>
            </ul> */}
          </div>
          <NavLink>Utilities Payment</NavLink>
          <NavLink>Fund Wallet</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink>Account</NavLink>
          <NavLink>Change pin</NavLink>
          <NavLink>For developers</NavLink>
          <NavLink>Logout</NavLink>
        </div>
      </nav>
    </div>
  );
}
