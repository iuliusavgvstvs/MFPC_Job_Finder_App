import React, { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo, FormInput, Alert } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  showAlert: false,
};

const RegisterPage = () => {
  const [values, setValues] = useState(initialState);
  const {
    isLoading,
    showAlert,
    displayAlert,
    registerUser,
    user,
  } = useAppContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password, firstName, lastName } = values;
    if (!email || !password || !firstName || !lastName) {
      displayAlert();
      return;
    }
    // create user
    const currentUser = { firstName, lastName, email, password };
    registerUser(currentUser);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Register</h3>
        {showAlert && <Alert />}
        {values.showAlert && <Alert />}
        <FormInput
          type="text"
          name="firstName"
          labelText="First Name"
          value={values.firstName}
          handleChange={handleChange}
        />
        <FormInput
          type="text"
          name="lastName"
          labelText="Last Name"
          value={values.lastName}
          handleChange={handleChange}
        />
        <FormInput
          type="text"
          name="email"
          labelText="Email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          labelText="Password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? 'Please wait...' : 'Submit'}
        </button>
        <p>
          <Link to="/login" className="member-btn">
            Go to Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default RegisterPage;
