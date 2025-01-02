import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import ProtectedRoutes from '../security/components/ProtectedRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoutes>
            <Profile />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
