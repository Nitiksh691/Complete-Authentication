import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Home from "../Pages/Home/HOme";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute"; // ✅ ADDED
import About from "../Pages/About";

const Layout = ({ children }) => {
  return (
    <>
      <div className="main-content">{children}</div>
    </>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* ✅ WRAPPED: Login and Register with PublicRoute */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Layout>
              <Login />
            </Layout>
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Layout>
              <Register />
            </Layout>
          </PublicRoute>
        }
      />
      
      {/* Protected route - only accessible when logged in */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout>
              <Home />
            </Layout>
          </ProtectedRoute>
        }
      />
      
      {/* ✅ OPTIONAL: Add an about page (public, accessible to everyone) */}
      <Route
        path="/about"
        element={
          <Layout>
           <About />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
