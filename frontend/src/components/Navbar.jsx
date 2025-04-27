import React from 'react';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { logout } = useAuth();

  return (
    <nav className="navbar navbar-dark bg-primary mb-4">
      <div className="container">
        <span className="navbar-brand">Task Manager</span>
        <button className="btn btn-light" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
