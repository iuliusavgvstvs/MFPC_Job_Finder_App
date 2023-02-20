import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../assets/images/404.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const ErrorPage = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={notFound} alt="not found" />
        <h3>Page not found.</h3>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
