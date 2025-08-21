// src/component/Contact.jsx
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Contact = () => {
  return (
    <div className="container py-4">
      {/* Page Title */}
      <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
      <p className="text-center text-muted mb-5">
        We’d love to hear from you! Reach out using any of the options below.
      </p>

      {/* Cards Section */}
      <div className="row g-4">
        {/* Card 1 - Address */}
        <div className="col-12 col-md-4">
          <div className="card shadow-sm h-100 text-center border-0">
            <div
              className="card-body"
              style={{
                background: "linear-gradient(to right, #1e3c72, #2a5298)",
                color: "white",
                borderRadius: "10px",
              }}
            >
              <i className="bi bi-geo-alt-fill fs-1 mb-3"></i>
              <h5 className="card-title fw-bold">Our Address</h5>
              <p className="card-text">
                123 Main Street, Pune <br /> Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 - Email */}
        <div className="col-12 col-md-4">
          <div className="card shadow-sm h-100 text-center border-0">
            <div
              className="card-body"
              style={{
                background: "linear-gradient(to right, #6a11cb, #2575fc)",
                color: "white",
                borderRadius: "10px",
              }}
            >
              <i className="bi bi-envelope-fill fs-1 mb-3"></i>
              <h5 className="card-title fw-bold">Email Us</h5>
              <p className="card-text">support@examportal.com</p>
              <p className="card-text">info@examportal.com</p>
            </div>
          </div>
        </div>

        {/* Card 3 - Phone */}
        <div className="col-12 col-md-4">
          <div className="card shadow-sm h-100 text-center border-0">
            <div
              className="card-body"
              style={{
                background: "linear-gradient(to right, #ff512f, #dd2476)",
                color: "white",
                borderRadius: "10px",
              }}
            >
              <i className="bi bi-telephone-fill fs-1 mb-3"></i>
              <h5 className="card-title fw-bold">Call Us</h5>
              <p className="card-text">+91 98765 43210</p>
              <p className="card-text">+91 91234 56789</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="text-center mt-5">
        <Link to="/" className="btn btn-primary px-4 py-2 rounded-pill shadow">
          <i className="bi bi-house-door-fill me-2"></i> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Contact;
