import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import AboutImage from '../img/about-hero.png';
import AnalyticsImage from '../img/carbon_analytics.png';
import SocialImage from '../img/people.png';
import ContentImage from '../img/content.png';
import Agent from '../img/agent.jpg';
import TestimonialImage2 from '../img/airtel-logo.png';
import TestimonialImage3 from '../img/etisalat-logo.png';
import TestimonialImage4 from '../img/glo-logo.png';
import TestimonialImage5 from '../img/mtn-logo.png';
import TestimonialImage6 from '../img/dstv-logo.png';

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
          <NavLink to="/sign-in">Log in</NavLink>
          <NavLink to="/sign-up" className="btn-blue">
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

          <div className="testimonial-top-note">
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
        <div className="about-top">
          <div className="about-chatter">
            <h2>About VTU-vend</h2>
            <p>
              Welcome to VTU-vend, your trusted online platform for seamless
              transactions in data, airtime, TV subscriptions, and electricity
              units. At VTU-vend, we pride ourselves on providing a
              user-friendly and secure environment to meet all your digital
              service needs. With a commitment to convenience and reliability,
              we aim to simplify your transactions and enhance your overall
              experience. Trust VTU-vend for a hassle-free journey in accessing
              essential digital services.
            </p>
          </div>
          <img src={AboutImage} alt="about image" />
        </div>
      </section>

      <section id="testimonials">
        <div className="testimonial-bottom">
          <div className="testimonial-bottom-images">
            <div className="bottom-image-group">
              <img
                src={TestimonialImage2}
                alt="second testimonial image"
                className="second-testimonial"
              />
              <img
                src={TestimonialImage3}
                alt="third testimonial image"
                className="third-testimonial"
              />
            </div>
            <img
              src={TestimonialImage4}
              alt="fourth testimonial image"
              className="fourth-testimonial"
            />
          </div>
          <div className="testimonial-bottom-note">
            <h2>Write, read and connect with great minds on chatter</h2>
            <p>
              Share people your great ideas, and also read write-ups based on
              your interests. connect with people of same interests and goals
            </p>
            <button type="button">Get started</button>
          </div>
        </div>
      </section>
      <section id="contact">
        <p>CHATTER</p>

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
        <form>
          <input type="text" required placeholder="your name" />
          <input type="password" required placeholder="password" />
          <button>submit</button>
        </form>
      </section>
    </div>
  );
}
