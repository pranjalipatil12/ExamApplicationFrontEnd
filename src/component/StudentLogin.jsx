// src/component/StudentLogin.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  // ✅ State for form
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // ✅ Dummy login credentials
  const dummyUser = {
    email: "student@gmail.com",
    password: "123456",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.email === dummyUser.email &&
      formData.password === dummyUser.password
    ) {
      alert("✅ Login successful!");
      navigate("/student-dashboard"); // redirect to student dashboard
    } else {
      alert("❌ Invalid email or password!");
    }
  };

  return (
    <div
      className="position-relative"
      style={{ minHeight: "100vh", background: "#eaf2ff", padding: "15px" }}
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
          onClick={() => navigate("/")} // Logout redirects to home
          style={{ borderRadius: "50px" }}
        >
          <i className="bi bi-box-arrow-right me-1"></i> Logout
        </button>
      </div>

      {/* Login Card */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="card shadow p-3 p-md-4 rounded-4 w-100"
          style={{ maxWidth: "400px" }}
        >
          <div className="text-center mb-3">
            <i
              className="bi bi-people-fill"
              style={{ fontSize: "40px", color: "#6a11cb" }}
            ></i>
            <h3 className="mt-2">Student Login</h3>
            <p style={{ fontSize: "14px", color: "#6a11cb" }}>
              Access your dashboard and start taking exams
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-2">
              <label htmlFor="loginEmail" className="form-label fw-bold">
                <i className="bi bi-envelope-fill me-1"></i>Email
              </label>
              <input
                type="email"
                id="loginEmail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control form-control-sm"
                autoComplete="off"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="loginPassword" className="form-label fw-bold">
                <i className="bi bi-lock-fill me-1"></i>Password
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="loginPassword"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control form-control-sm"
                  required
                />
                <span
                  className="input-group-text"
                  onClick={togglePassword}
                  style={{ cursor: "pointer" }}
                >
                  <i
                    className={
                      showPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"
                    }
                  ></i>
                </span>
              </div>
            </div>

            <div className="text-end mb-3">
              <Link
                to="/student-forgot-password"
                style={{ textDecoration: "none" }}
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <div className="d-grid mb-2">
              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{
                  background: "linear-gradient(to right, #6a11cb, #ff0066)",
                  border: "none",
                }}
              >
                Login
              </button>
            </div>
          </form>

          <div className="text-center mt-2">
            <small>
              Don’t have an account?{" "}
              <Link
                to="/userlogin"
                style={{ color: "#0d6efd", fontWeight: "500" }}
              >
                Register here
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
