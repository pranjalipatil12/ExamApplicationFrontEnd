import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Exams = () => {
  const [examData, setExamData] = useState({
    examName: "",
    totalMarks: "",
    passingMarks: "",
  });

  const [exams, setExams] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExamData({ ...examData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !examData.examName ||
      !examData.totalMarks ||
      !examData.passingMarks
    ) {
      alert("Please fill all fields!");
      return;
    }

    if (editIndex !== null) {
      // update existing exam
      const updated = exams.map((ex, i) =>
        i === editIndex ? examData : ex
      );
      setExams(updated);
      setEditIndex(null);
    } else {
      // add new exam
      setExams([...exams, examData]);
    }

    // reset form
    setExamData({ examName: "", totalMarks: "", passingMarks: "" });
  };

  const handleDelete = (index) => {
    setExams(exams.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setExamData(exams[index]);
    setEditIndex(index);
  };

  return (
    <div className="p-2 mt-1">
      {/* Title */}
      <div className="mb-4">
        <h4
          className="text-white fw-bold p-2 rounded text-center"
           style={{ background: "linear-gradient(to right, #6a11cb, #ff0066)" }}
        >
          <i className="bi bi-journal-check me-2" />
          Welcome to the Exams Panel
        </h4>
      </div>

      <div className="row">
        {/* Add Exam Form */}
        <div className="col-md-5 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5
                className="text-white fw-bold p-2 rounded mb-3"
                style={{
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",
                }}
              >
                <i className="bi bi-plus-circle me-2"></i>
                {editIndex !== null ? "Update Exam" : "Add New Exam"}
              </h5>

              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label className="form-label fw-bold">Exam Name</label>
                  <input
                    type="text"
                    name="examName"
                    value={examData.examName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter exam name"
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label fw-bold">Total Marks</label>
                  <input
                    type="number"
                    name="totalMarks"
                    value={examData.totalMarks}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter total marks"
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label fw-bold">Passing Marks</label>
                  <input
                    type="number"
                    name="passingMarks"
                    value={examData.passingMarks}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter passing marks"
                  />
                </div>
                <button
                  type="submit"
                  className="btn w-100 text-white fw-bold"
                  style={{
                    background: "linear-gradient(to right, #6a11cb, #2575fc)",
                    border: "none",
                  }}
                >
                  <i className="bi bi-floppy-fill me-2"></i>
                  {editIndex !== null ? "Update Exam" : "Submit Exam"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Exams List */}
        <div className="col-md-7">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5
                className="text-white fw-bold p-2 rounded mb-3"
                style={{
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",
                }}
              >
                <i className="bi bi-list-task me-2"></i>Exams List
              </h5>

              <div className="table-responsive">
                <table className="table table-bordered text-center">
                  <thead className="table-primary">
                    <tr>
                      <th>Exam Name</th>
                      <th>Total Marks</th>
                      <th>Passing Marks</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exams.length === 0 ? (
                      <tr>
                        <td colSpan="4">No exams added</td>
                      </tr>
                    ) : (
                      exams.map((item, index) => (
                        <tr key={index}>
                          <td>{item.examName}</td>
                          <td>{item.totalMarks}</td>
                          <td>{item.passingMarks}</td>
                          <td>
                            {/* Edit Button */}
                            <button
                              className="btn btn-sm btn-primary me-2"
                              onClick={() => handleEdit(index)}
                            >
                              <i className="bi bi-pencil-square"></i>
                            </button>

                            {/* Delete Button */}
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleDelete(index)}
                            >
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
