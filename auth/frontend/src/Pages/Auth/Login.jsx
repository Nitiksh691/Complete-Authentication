import React, { useState } from 'react'
import "../../style/login.css"
import { Link, useNavigate } from 'react-router-dom' // ✅ ADDED: useNavigate
import { useAuth } from '../../context/AuthContext' // ✅ ADDED: useAuth

const Login = () => {
  const [login, setlogin] = useState({
    email: "",
    password: ""
  })

  const { login: loginUser } = useAuth(); // ✅ ADDED
  const navigate = useNavigate(); // ✅ ADDED

  // ✅ FIXED: Complete handleSubmit implementation
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = login;
    const result = await loginUser(email, password);
    if (result.success) {
      alert('Login successful!');
      navigate('/'); // ✅ Navigate to home after successful login
    } else {
      alert(result.message || 'Login failed');
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, "  ", value);
    const loginInfo = { ...login }
    loginInfo[name] = value
    setlogin(loginInfo)
  }

  return (
    <div className='container'>
      <h2>Login form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email" // ✅ CHANGED: from "text" to "email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            value={login.email} // ✅ ADDED: controlled input
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password" // ✅ FIXED: Changed from "text" to "password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            value={login.password} // ✅ ADDED: controlled input
            required
          />
        </div>
        <button type="submit">Login</button> {/* ✅ REMOVED: onClick handler (form handles submit) */}
      </form>
      <p className="register-link">
        If you don't have an account{" "}
        <span>
          <Link to="/register">Register</Link>
        </span>
      </p>
    </div>
  )
}

export default Login
