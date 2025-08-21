// src/component/Result.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Result = () => {
  const [resultData, setResultData] = useState({
    studentid: "",
    subject: "",
    score: "",
  });

  const [results, setResults] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResultData({ ...resultData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(resultData).every((v) => v !== "")) {
      if (editIndex !== null) {
        // Update existing
        const updated = results.map((r, i) =>
          i === editIndex ? resultData : r
        );
        setResults(updated);
        setEditIndex(null);
      } else {
        // Add new
        setResults([...results, resultData]);
      }

      // Reset form
      setResultData({ studentid: "", subject: "", score: "" });
    } else {
      alert("Please fill all fields!");
    }
  };

  const handleDelete = (index) => {
    setResults(results.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setResultData(results[index]); // prefill form
    setEditIndex(index);
  };

  return (
    <div className="p-2 mt-1">
      <div className="mb-4">
        <h4
          className="text-white fw-bold p-2 rounded text-center"
          style={{ background: "linear-gradient(to right, #6a11cb, #2575fc)" }}
        >
          <i className="bi bi-bar-chart-line-fill me-2" />
          Exam Results Panel
        </h4>
      </div>

      <div className="row">
        {/* Add / Update Result Form */}
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
                {editIndex !== null ? "Update Result" : "Add New Result"}
              </h5>
              <form onSubmit={handleSubmit}>
                {["studentid", "subject", "score"].map((field, idx) => (
                  <div className="mb-2" key={idx}>
                    <label className="form-label fw-bold">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === "score" ? "number" : "text"}
                      name={field}
                      value={resultData[field]}
                      onChange={handleChange}
                      className="form-control"
                      placeholder={`Enter ${field}`}
                      autoComplete="off"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="btn w-100 text-white fw-bold"
                  style={{
                    background: "linear-gradient(to right, #6a11cb, #2575fc)",
                    border: "none",
                  }}
                >
                  <i className="bi bi-floppy-fill me-2"></i>
                  {editIndex !== null ? "Update Result" : "Submit Result"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Results List Table */}
        <div className="col-md-7">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5
                className="text-white fw-bold p-2 rounded mb-3"
                style={{
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",
                }}
              >
                <i className="bi bi-table me-2"></i>Results List
              </h5>

              <div className="table-responsive">
                <table className="table table-bordered text-center">
                  <thead className="table-primary">
                    <tr>
                      <th>Sr.No</th>
                      <th>Studentid</th>
                      <th>Subject</th>
                      <th>Score</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.length === 0 ? (
                      <tr>
                        <td colSpan="5">No results added</td>
                      </tr>
                    ) : (
                      results.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.studentid}</td>
                          <td>{item.subject}</td>
                          <td>{item.score}</td>
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

export default Result;
