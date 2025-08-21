// src/component/ExamList.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const exams = [
  { id: 1, name: "Alice", course: "Java", date: "2025-06-30", start: "10:00:00", end: "11:00:00", examName: "Java Basics", total: 50, pass: 25 },
  { id: 2, name: "Alice", course: "Python", date: "2025-07-02", start: "12:00:00", end: "13:00:00", examName: "Python Intro", total: 50, pass: 25 },
  { id: 3, name: "Alice", course: "JavaScript", date: "2025-07-04", start: "14:00:00", end: "15:00:00", examName: "JavaScript DOM", total: 50, pass: 25 },
  { id: 4, name: "Alice", course: "CSS", date: "2025-07-06", start: "16:00:00", end: "17:00:00", examName: "CSS Styling", total: 50, pass: 25 },
  { id: 5, name: "Alice", course: "React", date: "2025-07-08", start: "18:00:00", end: "19:00:00", examName: "React Components", total: 50, pass: 25 },
];

const ExamList = () => {
  const handleStartTest = (exam) => {
    alert(`Starting test: ${exam.examName}`);
    // later navigate to actual ExamForm
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4 fw-bold">Welcome To Exam Portal</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center align-middle shadow">
          <thead className="bg-primary text-white">
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Course</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Exam Name</th>
              <th>Total Mark</th>
              <th>Passing Mark</th>
              <th>Start Test</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, index) => (
              <tr key={exam.id}>
                <td>{index + 1}</td>
                <td>{exam.name}</td>
                <td>{exam.course}</td>
                <td>{exam.date}</td>
                <td>{exam.start}</td>
                <td>{exam.end}</td>
                <td>{exam.examName}</td>
                <td>{exam.total}</td>
                <td>{exam.pass}</td>
                <td>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleStartTest(exam)}
                  >
                    <i className="bi bi-play-fill"></i> Start Test
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamList;
