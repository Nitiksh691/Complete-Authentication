import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../style/navbar.css";
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user ,token, logout } = useAuth();
  const navigate = useNavigate()

  const handleLogout =() =>{
    logout()
    navigate('/login')
  }
  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* Left side - Image/Logo */}
        <div className="navbar-left">
          <div className="img">
            {/* Add your logo/image here */}
          </div>
        </div>

        {/* Right side - Title and Links */}
        <div className="navbar-right">
          <div className="logo">
            <span>
              <span className="bracket">[</span>THE<span className="slash">-</span>NEURAL<span className="slash">-</span>NETS<span className="bracket">]</span>
            </span>
          </div>
          <div className="nav-links">
         
            {token ? (
              // Logged in - show logout
              <>
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
                <button onClick={handleLogout} className="nav-button">logout</button>
              </>
            ) : (
              // Logged out - show login/register
              <>
                <Link to="/login">login</Link>
                <Link to="/register">register</Link>
                <Link to="/about">about</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
