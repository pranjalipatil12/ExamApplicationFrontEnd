import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const AdminHome = () => {
  return (
    <div className="container mt-4">
      {/* Welcome Card */}
      <div
        className="card shadow-sm p-3 mb-4"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        {/* Icon */}
        <div
          className="me-3"
          style={{
            fontSize: "3rem",
            color: "#0d6efd", // Bootstrap primary color
          }}
        >
          <i className="bi bi-person-badge-fill"></i>
        </div>

        {/* Text */}
        <div>
          <h4 className="mb-1 fw-bold">Welcome, Admin!</h4>
          <p className="mb-0">Use the sidebar to manage the exam application system.</p>
        </div>
      </div>

      {/* Dashboard Cards (Optional) */}
      <div className="row">
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3 shadow-sm">
            <i className="bi bi-book display-4 mb-2 text-primary"></i>
            <h6>Subjects</h6>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3 shadow-sm">
            <i className="bi bi-pencil-square display-4 mb-2 text-success"></i>
            <h6>Exams</h6>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3 shadow-sm">
            <i className="bi bi-question-circle display-4 mb-2 text-warning"></i>
            <h6>Questions</h6>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3 shadow-sm">
            <i className="bi bi-calendar-event display-4 mb-2 text-danger"></i>
            <h6>Schedule</h6>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default AdminHome;
