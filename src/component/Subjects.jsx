// src/component/Subjects.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Subjects = () => {
  const subjectData = [
    {
      title: "Java Full Stack",
      description: "Learn Java, Spring Boot, Hibernate, and front-end technologies for full-stack development.",
      icon: "bi-file-earmark-code"
    },
    {
      title: ".NET",
      description: "Master C#, ASP.NET Core, and build scalable enterprise applications.",
      icon: "bi-cpu"
    },
    {
      title: "Python",
      description: "Explore Python programming, Django, Flask, and data science basics.",
      icon: "bi-terminal" // Changed to an available icon
    },
    {
      title: "MERN Stack",
      description: "Develop applications using MongoDB, Express.js, React, and Node.js.",
      icon: "bi-laptop"
    },
  ];

  return (
    <div className="p-4" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <h2 className="fw-bold mb-4 text-center">
        <i className="bi bi-journal-text me-2"></i> {/* Icon for H2 heading */}
        Subjects
      </h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {subjectData.map((subject, index) => (
          <div key={index} className="card text-center shadow-sm" style={{ width: "220px", padding: "15px" }}>
            <div className="card-body">
              <i className={`bi ${subject.icon} fs-1 mb-2 text-primary`}></i>
              <h6 className="card-title">{subject.title}</h6>
              <p className="card-text" style={{ fontSize: "0.85rem" }}>{subject.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
