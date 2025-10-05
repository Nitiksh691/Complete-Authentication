import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);

  // ✅ FIXED: Restore user data on mount/refresh
  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user'); // ✅ NEW: Get stored user

      if (storedToken) {
        setToken(storedToken);

        // ✅ First, try to load user from localStorage (instant)
        if (storedUser) {
          try {
            setUser(JSON.parse(storedUser));
          } catch (error) {
            console.error('Failed to parse stored user:', error);
          }
        }

        // ✅ Then, optionally verify token with backend (more secure)
        try {
          const response = await fetch('http://localhost:8000/api/home/', {
            headers: {
              'Authorization': `Bearer ${storedToken}`
            }
          });
          const data = await response.json();
          
          if (data.success && data.user) {
            // Update user with fresh data from backend
            setUser(data.user);
            localStorage.setItem('user', JSON.stringify(data.user));
          } else {
            // Token is invalid, clear everything
            setUser(null);
            setToken(null);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
          }
        } catch (error) {
          console.error('Failed to verify token:', error);
          // Keep the locally stored user data even if backend is unreachable
        }
      }
      
      setLoading(false);
    };

    initializeAuth();
  }, []); // ✅ Run only once on mount

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      
      if (data.success) {
        const userData = { email: data.email, name: data.name };
        
        setUser(userData);
        setToken(data.jwtToken);
        
        // ✅ FIXED: Save both token AND user to localStorage
        localStorage.setItem('token', data.jwtToken);
        localStorage.setItem('user', JSON.stringify(userData));
        
        return { success: true };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Network error - Backend not running' };
    }
  };

  const signup = async (name, email, password) => {
    try {
      const response = await fetch('http://localhost:8000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      
      if (data.success) {
        return { success: true };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, message: 'Network error - Backend not running' };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    
    // ✅ FIXED: Clear both token AND user from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const value = {
    user,
    token,
    login,
    signup,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
