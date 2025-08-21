// src/component/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar = () => {
  return (
    <div
      className="text-white p-3 vh-100"
      style={{
        width: "240px",
        background: "linear-gradient(to bottom, #1e3c72, #2a5298)"
      }}
    >
      <ul className="nav flex-column">
        <li className="nav-item mb-2 fw-bold">
          <Link to="/AdminHome" className="nav-link text-white">
            <i className="bi bi-person-circle me-2" /> Admin Plan
          </Link>
        </li>
        <li className="nav-item mb-2 fw-bold">
          <Link to="/subjects" className="nav-link text-white">
            <i className="bi bi-book me-2" /> Subjects
          </Link>
        </li>
        <li className="nav-item mb-2 fw-bold">
          <Link to="/exams" className="nav-link text-white">
            <i className="bi bi-pencil-square me-2" /> Exams
          </Link>
        </li>
        <li className="nav-item mb-2 fw-bold">
          <Link to="/questions" className="nav-link text-white">
            <i className="bi bi-question-circle me-2" /> Questions
          </Link>
        </li>
        <li className="nav-item mb-2 fw-bold">
          <Link to="/schedule" className="nav-link text-white">
            <i className="bi bi-calendar-event me-2" /> Schedule
          </Link>
        </li>

        {/* ✅ New Result Menu */}
        <li className="nav-item mb-2 fw-bold">
          <Link to="/result" className="nav-link text-white">
            <i className="bi bi-graph-up me-2" /> Results
          </Link>
        </li>

        <li className="nav-item fw-bold">
          <Link to="/admin-register" className="nav-link text-white">
            <i className="bi bi-person-plus me-2" /> Admin Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
