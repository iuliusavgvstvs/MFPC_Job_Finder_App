import React from 'react';
import { Logo } from '../components';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>MFPC Job Finder and Tracker APP</h1>
          <p>
            A simple client-server app, created using the MERN
            (MongoDB-ExpressJs-ReactJs-NodeJs) stack which gives the users the
            posibility to find, apply and track jobs
          </p>
          <Link to="/login" className="btn btn-hero">
            Login
          </Link>
        </div>
        <img src={main} alt="job hire" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default LandingPage;
