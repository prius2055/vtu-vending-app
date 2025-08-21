import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardInfo from '../components/DashboardInfo';

import './Dashboard.css';
import SideBarNav from '../components/SideBarNav';

export default function Dashboard({user}) {

  return (
    <div className="dashboard">
      <SideBarNav />
      <DashboardInfo user={user} />
    </div>
  );
}
