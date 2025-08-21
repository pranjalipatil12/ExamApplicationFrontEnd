// src/component/ForgotPassword.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // detect role from URL: "/forgot-password/admin" or "/forgot-password/student"
  const role = location.pathname.includes("student") ? "student" : "admin";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSave = () => {
    if (!password || !confirmPassword) {
      setMessage("⚠️ Please fill all fields.");
    } else if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match.");
    } else {
      setMessage("✅ Password updated successfully!");
      setTimeout(() => {
        navigate(role === "student" ? "/studentlogin" : "/adminlogin");
      }, 2000);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", background: "#f3f6ff" }}
    >
      <div
        className="card shadow"
        style={{ maxWidth: "400px", width: "100%", borderRadius: "15px" }}
      >
        <div className="card-body">
          <h4 className="text-center mb-3">
            <i className="bi bi-shield-lock" style={{ color: "#6a11cb" }}></i>{" "}
            Reset Password ({role === "student" ? "Student" : "Admin"})
          </h4>

          {/* New Password */}
          <div className="mb-3 position-relative">
            <label className="form-label fw-bold">New Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} position-absolute`}
              style={{
                right: "10px",
                top: "70%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          {/* Confirm Password */}
          <div className="mb-3 position-relative">
            <label className="form-label fw-bold">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="form-control"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <i
              className={`bi ${showConfirmPassword ? "bi-eye-slash" : "bi-eye"} position-absolute`}
              style={{
                right: "10px",
                top: "70%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            ></i>
          </div>

          {/* Save Button */}
          <div className="d-grid mb-3">
            <button
              className="btn"
              onClick={handleSave}
              style={{
                background: "linear-gradient(to right, #6a11cb, #ff0066)",
                border: "none",
                color: "white",
              }}
            >
              Save
            </button>
          </div>

          {/* Message */}
          {message && (
            <p className="text-center fw-bold" style={{ color: "#6a11cb" }}>
              {message}
            </p>
          )}

          {/* Back to Login */}
          <div className="text-center mt-2">
            <button
              className="btn btn-link p-0"
              onClick={() =>
                navigate(role === "student" ? "/studentlogin" : "/adminlogin")
              }
            >
              Back to {role === "student" ? "Student" : "Admin"} Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
