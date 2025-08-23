import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AddExam, viewExam, deleteExam, UpdateExam } from "../service/service";

const Exams = () => {
  const [examData, setExamData] = useState({
    examid: "",
    examName: "",
    totalMarks: "",
    passingMarks: "",
    course: "",
  });

  const [exams, setExams] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExamData({ ...examData, [name]: value });
  };

  const viewExamDetail = async () => {
    const result = await viewExam();
    setExams(result);
  };

  useEffect(() => {
    viewExamDetail();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!examData.examName || !examData.totalMarks || !examData.passingMarks || !examData.course) {
      alert("Please fill all fields!");
      return;
    }

    if (editIndex !== null) {
      // Update exam
      const result = await UpdateExam(
        examData.examid,
        examData.examName,
        examData.totalMarks,
        examData.passingMarks,
        examData.course
      );
    } else {
      // Add exam
      const result = await AddExam(
        examData.examName,
        examData.totalMarks,
        examData.passingMarks,
        examData.course
      );
      alert(result);
    }

    // refresh list + reset form
    viewExamDetail();
    setExamData({ examid: "", examName: "", totalMarks: "", passingMarks: "", course: "" });
    setEditIndex(null);
  };

  const handleDelete = async (id) => {
    const result = await deleteExam(id);
    alert(result);
    viewExamDetail();
  };

  const handleEdit = (exam) => {
    setExamData({
      examid: exam.examid,
      examName: exam.examname,
      totalMarks: exam.total_marks,
      passingMarks: exam.passing_marks,
      course: exam.course,
    });
    setEditIndex(exam.examid);
  };

  return (
    <div className="p-2 mt-1">
      {/* Title */}
      <div className="mb-4">
        <h4 className="text-white fw-bold p-2 rounded text-center" style={{ background: "linear-gradient(to right, #6a11cb, #ff0066)" }}>
          <i className="bi bi-journal-check me-2" /> Welcome to the Exams Panel
        </h4>
      </div>

      <div className="row">
        {/* Add / Update Exam Form */}
        <div className="col-md-5 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="text-white fw-bold p-2 rounded mb-3" style={{ background: "linear-gradient(to right, #6a11cb, #2575fc)" }}>
                <i className="bi bi-plus-circle me-2"></i>
                {editIndex !== null ? "Update Exam" : "Add New Exam"}
              </h5>

              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label className="form-label fw-bold">Exam Name</label>
                  <input type="text" name="examName" value={examData.examName} onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-2">
                  <label className="form-label fw-bold">Total Marks</label>
                  <input type="number" name="totalMarks" value={examData.totalMarks} onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-2">
                  <label className="form-label fw-bold">Passing Marks</label>
                  <input type="number" name="passingMarks" value={examData.passingMarks} onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Course</label>
                  <select name="course" value={examData.course} onChange={handleChange} className="form-select">
                    <option value="">Select Course</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                    <option value="Mern">Mern</option>
                    <option value="Dot Net">Dot Net</option>
                  </select>
                </div>
                <button type="submit" className="btn w-100 text-white fw-bold" style={{ background: "linear-gradient(to right, #6a11cb, #2575fc)", border: "none" }}>
                  <i className="bi bi-floppy-fill me-2"></i> {editIndex !== null ? "Update Exam" : "Submit Exam"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Exams List */}
        <div className="col-md-7">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="text-white fw-bold p-2 rounded mb-3" style={{ background: "linear-gradient(to right, #6a11cb, #2575fc)" }}>
                <i className="bi bi-list-task me-2"></i>Exams List
              </h5>
              <div className="table-responsive">
                <table className="table table-bordered text-center">
                  <thead className="table-primary">
                    <tr>
                      <th>Exam Name</th>
                      <th>Total Marks</th>
                      <th>Passing Marks</th>
                      <th>Course</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exams.length === 0 ? (
                      <tr>
                        <td colSpan="5">No exams added</td>
                      </tr>
                    ) : (
                      exams.map((item) => (
                        <tr key={item.examid}>
                          <td>{item.examname}</td>
                          <td>{item.total_marks}</td>
                          <td>{item.passing_marks}</td>
                          <td>{item.course}</td>
                          <td>
                            <button className="btn btn-sm btn-primary me-2" onClick={() => handleEdit(item)}>
                              <i className="bi bi-pencil-square"></i>
                            </button>
                            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item.examid)}>
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exams;
