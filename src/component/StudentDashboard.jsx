// src/component/StudentDashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ✅ Clear auth/session (if you use localStorage or tokens)
    localStorage.removeItem("studentToken");
    // ✅ Redirect to login page
    navigate("/studentlogin");
  };

  return (
    <div className="flex-grow-1 p-4">
      {/* Top Welcome Section */}
      <div className="text-center mb-4">
        <h3 className="fw-bold text-primary">
          Welcome Student<span className="ms-2">👋</span>
        </h3>
      </div>

      {/* Dashboard Cards */}
      <div className="row justify-content-center">
        {/* Take Exams */}
        <div className="col-md-3 mb-3">
          <div
            className="card text-center shadow-sm p-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/student-dashboard/exams")}
          >
            <div className="card-body">
              <i className="bi bi-pencil-square fs-1 text-primary"></i>
              <h6 className="mt-2 fw-bold">Take Exams</h6>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="col-md-3 mb-3">
          <div
            className="card text-center shadow-sm p-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/student-dashboard/result")}
          >
            <div className="card-body">
              <i className="bi bi-file-earmark-text fs-1 text-primary"></i>
              <h6 className="mt-2 fw-bold">Result</h6>
            </div>
          </div>
        </div>

        {/* Upcoming Exam Schedule */}
        <div className="col-md-3 mb-3">
          <div
            className="card text-center shadow-sm p-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/student-dashboard/schedule")}
          >
            <div className="card-body">
              <i className="bi bi-calendar-event fs-1 text-primary"></i>
              <h6 className="mt-2 fw-bold">Upcoming Exam Schedule</h6>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="col-md-3 mb-3">
          <div
            className="card text-center shadow-sm p-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/student-dashboard/profile")}
          >
            <div className="card-body">
              <i className="bi bi-person-circle fs-1 text-primary"></i>
              <h6 className="mt-2 fw-bold">Profile</h6>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="col-md-3 mb-3">
          <div
            className="card text-center shadow-sm p-3 bg-danger text-white"
            style={{ cursor: "pointer" }}
            onClick={handleLogout}
          >
            <div className="card-body">
              <i className="bi bi-box-arrow-right fs-1"></i>
              <h6 className="mt-2 fw-bold">Logout</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
