import React, { useState } from 'react'
import "../../style/login.css"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Register = () => {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: ""
  })

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = register;
    const result = await signup(name, email, password);
    if (result.success) {
      alert('Registration successful! Please login.');
      navigate('/login'); // ✅ FIXED: Changed from '/home' to '/login'
    } else {
      alert(result.message || 'Registration failed');
    }
  }

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            value={register.name}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email" // ✅ CHANGED: from "text" to "email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            value={register.email}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            value={register.password}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p className="register-link">
        If you have an account{" "}
        <span>
          <Link to="/login">Login</Link>
        </span>
      </p>
    </div>
  )
}

export default Register
