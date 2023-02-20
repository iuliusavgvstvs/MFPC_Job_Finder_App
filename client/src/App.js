import React from 'react';
import { LandingPage, RegisterPage, LoginPage, ErrorPage } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  AddJobPage,
  AllJobsPage,
  ProfilePage,
  SharedLayout,
  StatsPage,
} from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<StatsPage />} />
          <Route path="all-jobs" element={<AllJobsPage />}></Route>
          <Route path="add-job" element={<AddJobPage />}></Route>
          <Route path="profile" element={<ProfilePage />}></Route>
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
