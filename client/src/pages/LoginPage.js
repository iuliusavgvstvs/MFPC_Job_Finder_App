import React, { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo, FormInput, Alert } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const initialState = {
  email: '',
  password: '',
  showAlert: true,
};

const LoginPage = () => {
  const [values, setValues] = useState(initialState);
  const {
    isLoading,
    showAlert,
    displayAlert,
    loginUser,
    user,
  } = useAppContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      displayAlert();
      return;
    }
    // create user
    const currentUser = { email, password };
    loginUser(currentUser);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        {showAlert && <Alert />}
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
          <Link to="/register" className="member-btn">
            Go to Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default LoginPage;
