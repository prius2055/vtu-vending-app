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

import './SideBarNav.css';

export default function SideBarNav() {
  // const { usersArray, isLoading, loadingError } = useSelector(
  //   (store) => store.users
  // );

  // console.log(usersArray);

  return (
    <div className="side-bar">
      <NavLink to="/" className="logo">
        VTU-vend
      </NavLink>

      <nav className="navigation">
        <NavLink to="/dashboard" className="n-link">
          <h3>Dashboard</h3>
        </NavLink>

        <NavLink to="/" className="n-link">
          <h3>Buy Data</h3>
        </NavLink>

        <NavLink to="/sales" className="n-link">
          <h3> Buy Airtime</h3>
        </NavLink>

        <NavLink to="/sales" className="n-link">
          <h3>Utilities Payment</h3>
        </NavLink>

        <NavLink to="/funding" className="n-link">
          <h3>Fund Wallet</h3>
        </NavLink>

        <NavLink to="/prices" className="n-link">
          <h3>Pricing</h3>
        </NavLink>

        <NavLink to="/account" className="n-link">
          <h3>Account</h3>
        </NavLink>

        <NavLink to="/pin-setting" className="n-link">
          <h3>Change pin</h3>
        </NavLink>

        <NavLink to="/developer-api" className="n-link">
          <h3>For developers</h3>
        </NavLink>

        <NavLink to="sign-out" className="n-link">
          <h3>Logout</h3>
        </NavLink>
      </nav>
    </div>
  );
}
