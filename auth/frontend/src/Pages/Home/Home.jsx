import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { user, logout, loading } = useAuth(); // ✅ ADDED: loading
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // ✅ ADDED: Loading state
  if (loading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Welcome, {user ? user.name : 'User'}!</h2>
      <p>Email: {user ? user.email : ''}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
