import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from '../store/postSlice';

import Navigation from '../components/Nagivation';
import DashboardInfo from '../components/DashboardInfo';
import Header from '../components/Header';

import './Dashboard.css';

export default function Dashboard() {
  const { usersArray, currentUsers, isLoading, loadingError } = useSelector(
    (store) => store.users
  );

  // console.log(usersArray);
  // console.log(currentUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent());
  }, []);

  ////////////////////////////////////////////////
  return (
    <div className="feed">
      <Navigation />
      <div className="feed-group">
        <Header />
        <DashboardInfo />
      </div>
      {/* <button onClick={getData}>get post nice post</button> */}
    </div>
  );
}
