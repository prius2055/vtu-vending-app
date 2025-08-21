import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

  if (!token) {
    // Not logged in → redirect to login page
    return <Navigate to="/login" replace />;
  }

    return React.cloneElement(children, { user });
};

export default ProtectedRoutes;
