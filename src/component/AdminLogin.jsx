// src/component/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = () => {
    // Simple validation (dummy credentials)
    if (email === "admin@gmail.com" && password === "admin123") {
      navigate("/adminhome"); // ✅ Redirect to admin home page
    } else {
      alert("Invalid credentials. Try again!");
    }
  };

  return (
    <div
      className="position-relative"
      style={{
        background: "#eaf2ff",
        minHeight: "100vh",
        padding: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Top-right buttons */}
      <div className="position-absolute top-0 end-0 m-3 d-flex gap-2">
        <button
          className="btn btn-light d-flex align-items-center shadow-sm"
          onClick={() => navigate("/")}
          style={{ borderRadius: "50px" }}
        >
          <i className="bi bi-house-door-fill me-1"></i> Home
        </button>

        <button
          className="btn btn-danger d-flex align-items-center shadow-sm"
          onClick={() => navigate("/adminlogin")} // ✅ proper logout
          style={{ borderRadius: "50px" }}
        >
          <i className="bi bi-box-arrow-right me-1"></i> Logout
        </button>
      </div>

      {/* Login Card */}
      <div
        className="card shadow"
        style={{ maxWidth: "400px", width: "100%", borderRadius: "15px" }}
      >
        <div className="card-body">
          {/* Logo & Heading */}
          <div className="text-center mb-3">
            <i
              className="bi bi-person-lock"
              style={{ fontSize: "40px", color: "#b24592" }}
            ></i>
            <h4 className="mt-2">Admin Login</h4>
            <p style={{ fontSize: "14px", color: "#6a11cb" }}>
              Welcome back, please login to continue
            </p>

            {/* ✅ Dummy Credentials Info */}
            <div className="alert alert-info p-2 mt-2" style={{ fontSize: "13px" }}>
              <strong>Demo Credentials:</strong> <br />
              Email: <code>admin@gmail.com</code> <br />
              Password: <code>admin123</code>
            </div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-bold">
              <i className="bi bi-envelope-fill me-1"></i>Email
            </label>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-bold">
              <i className="bi bi-lock-fill me-1"></i>Password
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="off"
              />
              <span
                className="input-group-text"
                onClick={togglePassword}
                style={{ cursor: "pointer" }}
              >
                <i
                  className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"}`}
                ></i>
              </span>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-end mb-3">
            <button
              className="btn btn-link p-0"
              onClick={() => navigate("/admin-forgot-password")}
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <div className="d-grid mb-3">
            <button
              className="btn"
              style={{
                background: "linear-gradient(to right, #6a11cb, #ff0066)",
                border: "none",
                color: "white",
              }}
              onClick={handleLogin}
            >
              Login
            </button>
          </div>

          {/* Register */}
          <div className="text-center">
            <small>
              Don't have an account?{" "}
              <button
                className="btn btn-link p-0"
                onClick={() => navigate("/admin-register")}
              >
                Register
              </button>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
