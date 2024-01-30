import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import AboutImage from '../img/about-hero.jpg';
import AboutImage2 from '../img/about-hero-2.jpg';
import ContentImage from '../img/content.png';
import Agent from '../img/agent.jpg';
import Airtel from '../img/airtel-logo.png';
import Etisalat from '../img/etisalat-logo.png';
import Glo from '../img/glo-logo.png';
import Mtn from '../img/mtn-logo.png';
import Dstv from '../img/dstv-logo.png';
import NineMobile from '../img/nine-mobile-logo.png';

import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <header>
        <p>VTU vend</p>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#hero">Services</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="header-buttons">
          <NavLink to="/login">Log in</NavLink>
          <NavLink to="/signup" className="btn-blue">
            Sign up
          </NavLink>
        </div>
      </header>

      <section id="hero">
        <h1>
          Explore VTU-vend: Your Premier Destination for Data, Airtime, TV
          Subscriptions, and Electricity Units
        </h1>
        <p>Experience the convenience of a one-stop solution.</p>
        <button type="button" className="btn-blue">
          Login
        </button>
      </section>
      <section id="services">
        <h2>Our services</h2>
        <div className="services-cards">
          <div className="card">
            {/* <img src={SocialImage} alt="social interactions" /> */}
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/000000/topup-payment.png"
              alt="topup-payment"
            />
            <h3>Airtime recharge</h3>
            <p>
              Users on the platform can interact with posts they like, comment
              and engage in discussions
            </p>
          </div>

          <div className="card">
            {/* <img src={AnalyticsImage} alt="analytics" /> */}
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/material-outlined/48/000000/data-backup.png"
              alt="data-backup"
            />

            <h3>Data recharge</h3>
            <p>
              Analytics to track the number of views, likes and comment and also
              analyze the performance of your articles over a period of time
            </p>
          </div>

          <div className="card">
            <img src={ContentImage} alt="content creation" />
            <h3>Cable subscription</h3>
            <p>
              Write nice and appealing with our in-built markdown, a rich text
              editor
            </p>
          </div>

          <div className="card">
            {/* <img src={ContentImage} alt="content creation" /> */}

            <img
              width="50"
              height="50"
              src="https://img.icons8.com/external-others-pike-picture/50/external-Cash-Exchange-wealth-others-pike-picture-2.png"
              alt="external-Cash-Exchange-wealth-others-pike-picture-2"
            />
            <h3>Airtime to cash</h3>
            <p>
              Write nice and appealing with our in-built markdown, a rich text
              editor
            </p>
          </div>

          <div className="card">
            {/* <img src={ContentImage} alt="content creation" /> */}
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/card-in-use.png"
              alt="card-in-use"
            />
            <h3>Utility bill payment</h3>
            <p>
              Write nice and appealing with our in-built markdown, a rich text
              editor
            </p>
          </div>

          <div className="card">
            {/* <img src={ContentImage} alt="content creation" /> */}
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/sms.png"
              alt="sms"
            />
            <h3>Bulk SMS</h3>
            <p>
              Write nice and appealing with our in-built markdown, a rich text
              editor
            </p>
          </div>
        </div>
      </section>

      <section id="agent">
        <div className="agent-details">
          <img src={Agent} alt="agent" />

          <div className="agent-note">
            <p>
              Unlock new opportunities by joining VTU-vend as an authorized
              agent. As a registered agent, you'll have access to exclusive
              benefits and the chance to grow your business. Simply fill out the
              form below to kickstart your journey towards becoming a trusted
              VTU-vend partner. Join us in revolutionizing digital transactions
              and providing essential services to customers. Your success is our
              priority!
            </p>

            <button type="button">Become an Agent</button>
          </div>
        </div>
      </section>

      <section id="about">
        <h2>About VTU-vend</h2>
        <div className="about-vend">
          <p>
            Welcome to VTU-vend, your trusted online platform for seamless
            transactions in data, airtime, TV subscriptions, and electricity
            units. At VTU-vend, we pride ourselves on providing a user-friendly
            and secure environment to meet all your digital service needs. With
            a commitment to convenience and reliability, we aim to simplify your
            transactions and enhance your overall experience. Trust VTU-vend for
            a hassle-free journey in accessing essential digital services.
          </p>
          <div className="about-images">
            <img src={AboutImage} alt="about image" className="about-image-1" />
            <img
              src={AboutImage2}
              alt="about image"
              className="about-image-2"
            />
          </div>
        </div>
      </section>

      <section id="products">
        <h2>Products</h2>
        <div className="product-detail">
          <div className="product-logos">
            <div className="p-detail">
              <div>
                <img src={Airtel} alt="airtel logo" className="airtel" />
                <img src={Etisalat} alt="etisalat logo" className="etisalat" />
              </div>
              <img
                src={NineMobile}
                alt="9 mobile logo"
                className="nine-mobile"
              />
            </div>

            <div className="p-detail">
              <img src={Glo} alt="glo logo" className="glo" />
              <div>
                <img src={Mtn} alt="mtn logo" className="mtn" />
                <img src={Dstv} alt="dstv logo" className="dstv" />
              </div>
            </div>
          </div>
          <div className="p-note">
            <p>
              Explore our extensive selection of premium products, providing you
              with an unparalleled array of choices across all prominent
              telecommunication carriers and vendors in the nation. Immerse
              yourself in a diverse range of top-tier offerings tailored to meet
              your specific needs and preferences, ensuring you have access to
              the latest and most advanced solutions available in the market.
              Choose with confidence from our curated collection, where quality
              meets innovation, and experience a seamless integration with major
              telecom networks for unparalleled connectivity and performance.
            </p>
            <button type="button" className="p-btn">
              Login to make a purchase
            </button>
          </div>
        </div>
      </section>

      <section id="footer">
        <div className="contact">
          <p>VTU-vend</p>
          <div className="contact-navigation">
            <h3>Explore</h3>
            <ul>
              <li>Community</li>
              <li>Trending blogs</li>
              <li>Chatter for teams</li>
            </ul>
          </div>
          <div className="contact-navigation">
            <h3>Support</h3>
            <ul>
              <li>Support docs</li>
              <li>Join slack</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="contact-navigation">
            <h3>Official blog</h3>
            <ul>
              <li>Official blog</li>
              <li>Engineering blog</li>
            </ul>
          </div>
        </div>
        <div className='copyright'>
          <p>All right reserved VTU-vend 2024</p>
        </div>
      </section>
    </div>
  );
}
