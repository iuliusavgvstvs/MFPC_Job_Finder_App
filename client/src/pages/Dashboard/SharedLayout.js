import { useAppContext } from '../../context/appContext';
import { Outlet, Navigate } from 'react-router-dom';
import { Navbar, Sidebar } from '../../components';
import Wrapper from '../../assets/wrappers/SharedLayout';
import React from 'react';

const SharedLayout = () => {
  const { user } = useAppContext();
  return (
    <>
      {!user && <Navigate to="/landing" />}
      <Wrapper>
        <main className="dashboard">
          <Sidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
};

export default SharedLayout;
