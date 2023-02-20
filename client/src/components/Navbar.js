import React, { useState } from 'react';
import { useAppContext } from '../context/appContext';
import Logo from './Logo';
import Wrapper from '../assets/wrappers/Navbar';
const Navbar = () => {
  const { user, logoutUser } = useAppContext();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <Wrapper>
      <div className="nav-center">
        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>
        {user && (
          <div className="btn-container">
            <button className="btn" onClick={() => setShowLogout(!showLogout)}>
              {user.email}
            </button>
            <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
              <button onClick={() => logoutUser()} className="dropdown-btn">
                logout
              </button>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Navbar;
