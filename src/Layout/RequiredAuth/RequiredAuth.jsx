import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

import { getAuth } from '../../stores/features/authSlice'

const RequiredAuth = ({ children }) => {
  const isLoggedIn = useSelector(getAuth);
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login/login" state={ location } />;
  }
  return children;
}

export default RequiredAuth
