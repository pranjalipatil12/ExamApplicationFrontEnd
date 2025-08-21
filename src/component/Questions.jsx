import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Questions = () => {
  const [questionData, setQuestionData] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctanswer: "",
  });

  const [questions, setQuestions] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // for editing mode

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionData({ ...questionData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(questionData).every((v) => v !== "")) {
      if (editIndex !== null) {
        // update existing
        const updated = questions.map((q, i) =>
          i === editIndex ? questionData : q
        );
        setQuestions(updated);
        setEditIndex(null);
      } else {
        // add new
        setQuestions([...questions, questionData]);
      }

      // reset form
      setQuestionData({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correctanswer: "",
      });
    } else {
      alert("Please fill all fields!");
    }
  };

  const handleDelete = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setQuestionData(questions[index]); // prefill form
    setEditIndex(index);
  };

  return (
    <div className="p-2 mt-1">
      <div className="mb-4">
        <h4
          className="text-white fw-bold p-2 rounded text-center"
          style={{ background: "linear-gradient(to right, #6a11cb, #ff0066)" }}
        >
          <i className="bi bi-question-circle-fill me-2" />
          Welcome to the Question Panel
        </h4>
      </div>

      <div className="row">
        {/* Add / Update Question Form */}
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
                {editIndex !== null ? "Update Question" : "Add New Question"}
              </h5>
              <form onSubmit={handleSubmit}>
                {[
                  "question",
                  "option1",
                  "option2",
                  "option3",
                  "option4",
                  "correctanswer",
                ].map((field, idx) => (
                  <div className="mb-2" key={idx}>
                    <label className="form-label fw-bold">
                      {field === "correctanswer"
                        ? "Correct Answer"
                        : field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type="text"
                      name={field}
                      value={questionData[field]}
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
                  {editIndex !== null ? "Update Question" : "Submit Question"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Question List Table */}
        <div className="col-md-7">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5
                className="text-white fw-bold p-2 rounded mb-3"
                style={{
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",
                }}
              >
                <i className="bi bi-list-task me-2"></i>Question List
              </h5>

              <div className="table-responsive">
                <table className="table table-bordered text-center">
                  <thead className="table-primary">
                    <tr>
                      <th>Question</th>
                      <th>Option 1</th>
                      <th>Option 2</th>
                      <th>Option 3</th>
                      <th>Option 4</th>
                      <th>Correct Answer</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {questions.length === 0 ? (
                      <tr>
                        <td colSpan="7">No questions added</td>
                      </tr>
                    ) : (
                      questions.map((item, index) => (
                        <tr key={index}>
                          <td>{item.question}</td>
                          <td>{item.option1}</td>
                          <td>{item.option2}</td>
                          <td>{item.option3}</td>
                          <td>{item.option4}</td>
                          <td>{item.correctanswer}</td>
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

export default Questions;
