// src/component/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const creators = [
  {
    name: "Sayali Pawar",
    course: "B-Tech in Computer Science And Engineering",
    role: "Full Stack Developer",
    email: "psayali186@gmail.com",
    avatar: "/images/cap.jpg",
  },
  {
    name: "Pranjali Patil",
    course: "B-Tech in Computer Science And Engineering",
    role: "Full Stack Developer",
    email: "pranjalipatil186@gmail.com",
    avatar: "/images/cap.jpg",
  },
];

const About = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #1e3c72, #2a5298)",
        color: "#fff",
      }}
    >
      <div className="container py-5 position-relative">
        {/* Back to Home Button */}
        <div className="position-absolute top-0 end-0 mt-3 me-3">
          <Link to="/" className="btn btn-danger d-flex align-items-center">
            <i className="bi bi-arrow-left me-2"></i> Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">About Our Exam Application System</h1>
          <p className="mt-2 mx-auto" style={{ maxWidth: 800 }}>
            Our Exam Application System (EAS) is a powerful, user-friendly
            platform designed to streamline and automate the exam process,
            including applications, hall ticket generation, and reporting.
          </p>
        </div>

        {/* Mission */}
        <div
          className="p-3 rounded-4 shadow-sm mb-4 bg-white text-dark mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="mb-3 text-danger">🎯 Our Mission</h4>
          <p className="fw-bold">
            To empower educational institutions with a digital tool that
            enhances exam organization, accessibility, and transparency for
            students and administrators.
          </p>
        </div>

        {/* Key Features */}
        <div
          className="p-3 rounded-4 shadow-sm mb-4 bg-white text-dark mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="mb-3 text-warning">✨ Key Features</h4>
          <ul className="mb-0 fw-bold">
            <li>Smart exam scheduling with clash detection</li>
            <li>Role-based access for Admin, Faculty, and Students</li>
            <li>Online exam applications with tracking</li>
            <li>Auto-generated hall tickets with QR/Barcode</li>
            <li>Secure payments & receipts</li>
            <li>Reports & analytics (attendance, performance, registers)</li>
          </ul>
        </div>

        {/* Team */}
        <div
          className="p-3 rounded-4 shadow-sm mb-4 bg-white text-dark mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="mb-3 text-info">👨‍💻 Our Team</h4>
          <p className="fw-bold">
            This project is developed by a passionate team of Java full-stack
            developers using technologies like Node.js, React.js, MySQL, and
            Bootstrap 5.
          </p>
        </div>

        {/* Meet Our Creators */}
        <div
          className="p-3 rounded-4 shadow-sm mb-4 bg-white text-dark mx-auto"
          style={{ maxWidth: "900px" }}
        >
          <h4 className="mb-4 text-success">🌟 Meet Our Creators</h4>
          <div className="row g-4">
            {creators.map((c, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="card h-100 border-0 shadow-sm text-center p-3">
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className="rounded-circle mx-auto mb-3"
                    width="100"
                    height="100"
                    style={{ objectFit: "cover" }}
                  />
                  <h5 className="fw-bold">{c.name}</h5>
                  <p className="mb-1 text-muted fw-bold">Course: {c.course}</p>
                  <p className="mb-1 fw-bold">
                    <strong>Role:</strong> {c.role}
                  </p>
                  <p className="mb-0">
                    <i className="bi bi-envelope me-2"></i>
                    <a
                      href={`mailto:${c.email}`}
                      className="text-decoration-none"
                    >
                      {c.email}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-5">
          <span className="badge bg-dark-subtle text-dark">
            Version: 1.0 • React + Node + MySQL
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
