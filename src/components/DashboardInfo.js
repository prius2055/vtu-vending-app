import { useSelector } from 'react-redux';
import Post from './Post';

import './DashboardInfo.css';

const DashboardInfo = () => {
  // const { posts } = useSelector((store) => store.post);

  // const filteredPosts = posts.filter((post) => post.posts.length !== 0);

  return (
    <div className="dashboard">
      <section className="d-action">
        <div className="d-detail">
          <h3>Hello Prius</h3>
          <div className="d-detail-grp">
            <div className="d-welcome">
              <h2>Welcome to VTU-vend</h2>
              <p>
                Earn ₦500 instantly when you refer individuals to upgrade their
                accounts to affiliate or top-user status.
              </p>
              <p className="r-link">Referral link:</p>
            </div>
            <button>Fund wallet</button>
          </div>
        </div>
      </section>

      <div>
        <p>Smart Earner</p>
        <p>Account Number: </p>
        <p>Account Name</p>
        <p>Bank Name</p>
      </div>
      <div>
        <p>Wallet balance</p>
        <p>Referral Bonus</p>
        <p>My total referrals</p>
      </div>
      <div>
        <p>Transactions</p>
        <p>Data Transactions</p>
        <p>Airtime Transactions</p>
        <p>Wallet Summary</p>
        <p>Upgrade to Reseller</p>
      </div>
      <div>
        <p>Notifications</p>
        <p>FAQs</p>
        <p>Customer Support</p>
      </div>

      <div>
        <div>
          <p>Airtime top-up</p>
        </div>
        <div>
          <p>Buy data</p>
        </div>
        <div>
          <p>Airtime top-up</p>
        </div>
        <div>
          <p>Airtime to cash</p>
        </div>
        <div>
          <p>Electricity bills</p>
        </div>
        <div>
          <p>Cable subscription</p>
        </div>
        <div>
          <p>Bonus to wallet</p>
        </div>
        <div>
          <p>Transfer to other user</p>
        </div>
        <div>
          <p>Bulk SMS</p>
        </div>
        <div>
          <p>Result checker</p>
        </div>
        <div>
          <p>Recharge card printing</p>
        </div>
        <div>
          <p>My referrals</p>
        </div>
      </div>
      <div>
        <h2>Transaction detail</h2>

        <div>
          <div>
            <p>Wallet balance</p>
            <p>2000</p>
          </div>
          <div>
            <p>Total funding</p>
            <p>2000</p>
          </div>
          <div>
            <p>Total Spent</p>
            <p>2000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardInfo;
