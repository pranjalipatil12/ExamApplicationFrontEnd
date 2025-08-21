import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const [registeredEmails, setRegisteredEmails] = useState(["admin@example.com"]);

  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const validateField = (name, value) => {
    let error = "";

    if (name === "fullName") {
      if (!value.trim()) error = "Full name is required";
      else if (!/^[A-Z][a-zA-Z\s]*$/.test(value)) error = "";
    }

    if (name === "email") {
      if (!value.trim()) error = "Email is required";
      else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
        error = "Invalid email format";
      else if (registeredEmails.includes(value.toLowerCase()))
        error = "Email already exists";
    }

    if (name === "password") {
      if (!value) error = "Password is required";
      else if (value.length < 6) error = "Password must be at least 6 characters";
    }

    if (name === "confirmPassword") {
      if (!value) error = "Confirm Password is required";
      else if (value !== formData.password) error = "Passwords do not match";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "fullName") {
      value = value.replace(/[0-9]/g, "");
      if (value.length > 0) value = value.charAt(0).toUpperCase() + value.slice(1);
    }

    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(formData).forEach((key) => validateField(key, formData[key]));

    if (Object.values(errors).every((err) => err === "")) {
      if (!registeredEmails.includes(formData.email.toLowerCase())) {
        alert("Admin registration successful!");
        setRegisteredEmails([...registeredEmails, formData.email.toLowerCase()]);
        console.log(formData);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", background: "#eaf2ff", padding: "15px" }}>
      <div className="card shadow p-3 p-md-4 rounded-4 w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Admin Registration</h2>

        <form onSubmit={handleSubmit} noValidate>
          {/* Full Name */}
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label fw-bold">Full Name</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                value={formData.fullName}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
            </div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">Email</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">Password</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
              <input
                type={showPassword.password ? "text" : "password"}
                id="password"
                name="password"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                value={formData.password}
                onChange={handleChange}
                autoComplete="off"
              />
              <span className="input-group-text" onClick={() => togglePassword("password")} style={{ cursor: "pointer" }}>
                <i className={showPassword.password ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"}></i>
              </span>
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label fw-bold">Confirm Password</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="off"
              />
              <span className="input-group-text" onClick={() => togglePassword("confirmPassword")} style={{ cursor: "pointer" }}>
                <i className={showPassword.confirmPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"}></i>
              </span>
              {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
            </div>
          </div>

          <div className="d-grid mb-2">
            <button type="submit" className="btn btn-primary w-100" style={{ background: "linear-gradient(to right, #6a11cb, #ff0066)", border: "none" }}>
              Register
            </button>
          </div>
        </form>

        <div className="text-center">
          <small>
            Already have an account?{" "}
            <Link to="/adminlogin" style={{ color: "#0d6efd", fontWeight: "500" }}>
              Login Here
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
