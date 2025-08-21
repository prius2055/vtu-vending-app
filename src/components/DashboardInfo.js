import { useEffect,useState} from "react";

import AirtimeTopUp from '../img/airtime.svg';
import BuyData from '../img/data.jpg';
import AirtimeToCash from '../img/airtime2cash.jpg';
import UtilityBill from '../img/utility.jpg';
import Cable from '../img/cable.jpg';
import Wallet from '../img/fundacc.jpg';
import TransferToOthers from '../img/transfer.svg';
import BulkSms from '../img/sms.png';
import ResultChecker from '../img/resultchecker.png';
import Referrals from '../img/referral.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandHoldingDollar,
  faBoxArchive,
  faMoneyBillTrendUp,
} from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

import './DashboardInfo.css';

const DashboardInfo = ({ user }) => {

const firstname = user ? user.firstname : 'Guest';
const profileImage = user.profilePicture ? user.profilePicture : `https://ui-avatars.com/api/?name=${firstname}`;

//  const [token, setToken] = useState(localStorage.getItem("vtuToken") || null);
//   const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getToken = async () => {
  //     try {
  //       const res = await fetch("https://vtu.ng/wp-json/jwt-auth/v1/token", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           username: process.env.REACT_APP_VTU_USERNAME,
  //           password: process.env.REACT_APP_VTU_PASSWORD, 
  //         }),
  //       });

  //       if (!res.ok) {
  //         throw new Error(`HTTP error! status: ${res.status}`);
  //       }

  //       const data = await res.json();
  //       console.log("VTU Token response:", data);

  //       if (data.token) {
  //         setToken(data.token);
  //         localStorage.setItem("vtuToken", data.token);
  //       } else {
  //         throw new Error(data.message || "Token not returned");
  //       }
  //     } catch (err) {
  //       console.error("Error fetching VTU token:", err);
  //       setError(err.message);
  //     }
  //   };

  //   if (!token) {
  //     getToken();
  //   }

  //    const getWalletBalance = async () => {
  //     try {
  //       const res = await fetch("https://vtu.ng/wp-json/jwt-auth/v1/balance", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Authorization": `Bearer ${process.env.VTU_TOKEN}`
  //         }
        
  //       });

  //       if (!res.ok) {
  //         throw new Error(`HTTP error! status: ${res.status}`);
  //       }

  //       const data = await res.json();
  //       console.log("wallet balance:", data);

  //       // if (data.token) {
  //       //   setToken(data.token);
  //       //   localStorage.setItem("vtuToken", data.token);
  //       // } else {
  //       //   throw new Error(data.message || "Token not returned");
  //       // }
  //     } catch (err) {
  //       console.error("Error fetching VTU token:", err);
  //       setError(err.message);
  //     }
  //   };

  //   // getWalletBalance();

  // }, [token]);




  return (
    <div className="dashboard-info">
      <section className="d-action">
        <FontAwesomeIcon icon={faBell} className="bell-icon" />
        <div className="d-detail">
          <div className='d-detail-profile'>
              <img src={profileImage} alt={`${firstname}'s profile`} />
              <h3>Hello {firstname}</h3>
          </div>
        
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

      <section className="d-acct-details">
        <div className="acct-details">
          <h3>Smart Earner account</h3>
          <button className="acct-details-btn">Upgrade account</button>
        </div>
        <div className="acct-details-grp">
          <div className="acct-details-number">
            <p>Account Number: 999000124</p>
            <p>Account Name: vtuvend-prius</p>
            <p>Bank Name: Replit Bank PLC</p>
          </div>
          <div className="d-amount">
            <p>Available balance</p>
            <p>#0.00</p>
          </div>
          <div className="d-amount">
            <p>Referral Bonus</p>
            <p>#0.00</p>
          </div>
          <div className="d-amount">
            <p>My total referrals</p>
            <p>0 referrals</p>
          </div>
        </div>
      </section>

      <section className="transaction-grp">
        <div className="transactions">
          <div>
            <p>Transactions</p>
          </div>
          <div>
            <p>Data Transactions</p>
          </div>
          <div>
            <p>Airtime Transactions</p>
          </div>
          <div>
            <p>Wallet Summary</p>
          </div>
          <div>
            <p>Upgrade to Reseller</p>
          </div>
          <div>
            <p>FAQs</p>
          </div>
          <div>
            <p>Customer support</p>
          </div>
        </div>
      </section>

      <section className="dashboard-products">
        <h2>Products</h2>
        <div className="d-products">
          <div>
            <img src={AirtimeTopUp} alt="Airtime top up" />
            <p>Airtime top-up</p>
          </div>
          <div>
            <img src={BuyData} alt="Buy data" />
            <p>Buy data</p>
          </div>

          <div>
            <img src={AirtimeToCash} alt="Airtime to cash" />
            <p>Airtime to cash</p>
          </div>
          <div>
            <img src={UtilityBill} alt="Electricity bill" />
            <p>Electricity bills</p>
          </div>
          <div>
            <img src={Cable} alt="Cable subscription" />
            <p>Cable subscription</p>
          </div>
          <div>
            <img src={Wallet} alt="Bonus to wallet" />
            <p>Bonus to wallet</p>
          </div>
          <div>
            <img src={TransferToOthers} alt="Transfer to other users" />
            <p>Transfer to other user</p>
          </div>
          <div>
            <img src={BulkSms} alt="Bulk SMS" />
            <p>Bulk SMS</p>
          </div>
          <div>
            <img src={ResultChecker} alt="Result checker" />
            <p>Result checker</p>
          </div>

          <div>
            <img src={Referrals} alt="Referrals" />
            <p>My referrals</p>
          </div>
        </div>
      </section>

      <section className="dashboard-footer">
        <h2>Transaction summary</h2>
        <div className="footer-detail">
          <div className="f-detail-grp">
            <FontAwesomeIcon
              icon={faHandHoldingDollar}
              className="dashboard-footer-icon"
            />
            <div className="f-detail-note">
              <p>Wallet balance</p>
              <p>2000</p>
            </div>
          </div>

          <div className="f-detail-grp">
            <FontAwesomeIcon
              icon={faBoxArchive}
              className="dashboard-footer-icon"
            />
            <div className="f-detail-note">
              <p>Total funding</p>
              <p>2000</p>
            </div>
          </div>

          <div className="f-detail-grp">
            <FontAwesomeIcon
              icon={faMoneyBillTrendUp}
              className="dashboard-footer-icon"
            />
            <div className="f-detail-note">
              <p>Total spent</p>
              <p>2000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardInfo;
