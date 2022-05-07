import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context';

export const RedirectsAuth = () => {
  const {
   token,
  } = useAuth();

  const location = useLocation();

  return token ? (
    <Navigate to={'/explore'} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};