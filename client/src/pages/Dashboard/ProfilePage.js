import React, { useState } from 'react';
import { FormInput, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const ProfilePage = () => {
  const {
    user,
    showAlert,
    displayAlert,
    updateUser,
    isLoading,
  } = useAppContext();
  const [firstName, setName] = useState(user && user.firstName);
  const [lastName, setLastName] = useState(user && user.lastName);
  const [email, setEmail] = useState(user && user.email);
  const [location, setLocation] = useState(user && user.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email) {
      displayAlert();
      return;
    }

    updateUser({ firstName, email, lastName, location });
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile </h3>
        {showAlert && <Alert />}

        {/* name */}
        <div className="form-center">
          <FormInput
            type="text"
            name="firstName"
            labelText="First name"
            value={firstName}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormInput
            labelText="Last name"
            type="text"
            name="lastName"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormInput
            type="email"
            name="email"
            labelText="Email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />

          <FormInput
            type="text"
            name="location"
            labelText="Location"
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default ProfilePage;
