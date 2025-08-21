// src/component/Schedule.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Schedule = () => {
  const [scheduleData, setScheduleData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    course: "",
    exam: "",
  });

  const [schedules, setSchedules] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // For editing

  const handleChange = (e) => {
    const { name, value } = e.target;
    setScheduleData({ ...scheduleData, [name]: value });
  };

  const handleDelete = (index) => {
    const updated = schedules.filter((_, i) => i !== index);
    setSchedules(updated);
  };

  const handleEdit = (index) => {
    setScheduleData(schedules[index]); // Prefill form
    setEditIndex(index); // Save index for update
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !scheduleData.date ||
      !scheduleData.startTime ||
      !scheduleData.endTime ||
      !scheduleData.course ||
      !scheduleData.exam
    ) {
      alert("Please fill in all fields!");
      return;
    }

    if (scheduleData.endTime <= scheduleData.startTime) {
      alert("End time must be later than start time!");
      return;
    }

    if (editIndex !== null) {
      // Update existing
      const updated = schedules.map((item, i) =>
        i === editIndex ? scheduleData : item
      );
      setSchedules(updated);
      setEditIndex(null);
    } else {
      // Add new
      setSchedules([...schedules, scheduleData]);
    }

    // Reset form
    setScheduleData({
      date: "",
      startTime: "",
      endTime: "",
      course: "",
      exam: "",
    });
  };

  return (
    <div className="p-2 mt-2">
      {/* Title */}
      <div className="mb-4">
        <h4
          className="text-white fw-bold p-2 rounded text-center"
          style={{
            background: "linear-gradient(to right, #6a11cb, #ff0066)",
          }}
        >
          <i className="bi bi-calendar2-check-fill me-2" />
          Exam Schedule Panel
        </h4>
      </div>

      <div className="row">
        {/* Add / Update Schedule Form */}
        <div className="col-12 col-md-5 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5
                className="text-white fw-bold p-2 rounded mb-3"
                style={{
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",
                }}
              >
                <i className="bi bi-plus-circle me-2"></i>
                {editIndex !== null ? "Update Schedule" : "Add New Schedule"}
              </h5>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={scheduleData.date}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Start Time</label>
                  <input
                    type="time"
                    name="startTime"
                    value={scheduleData.startTime}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">End Time</label>
                  <input
                    type="time"
                    name="endTime"
                    value={scheduleData.endTime}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Course</label>
                  <select
                    name="course"
                    value={scheduleData.course}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select Course</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                    <option value="Mern">Mern</option>
                    <option value="Dot Net">Dot Net</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Exam</label>
                  <select
                    name="exam"
                    value={scheduleData.exam}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select Exam</option>
                    <option value="Final">Final</option>
                  </select>
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
                  {editIndex !== null ? "Update Schedule" : "Submit Schedule"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Schedule Table */}
        <div className="col-12 col-md-7">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5
                className="text-white fw-bold p-2 rounded mb-3"
                style={{
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",
                }}
              >
                <i className="bi bi-list-task me-2"></i>Schedule List
              </h5>

              <div className="table-responsive">
                <table className="table table-bordered text-center">
                  <thead className="table-primary">
                    <tr>
                      <th>Date</th>
                      <th>Start</th>
                      <th>End</th>
                      <th>Course</th>
                      <th>Exam</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedules.length === 0 ? (
                      <tr>
                        <td colSpan="6">No schedules found</td>
                      </tr>
                    ) : (
                      schedules.map((item, index) => (
                        <tr key={index}>
                          <td>{item.date}</td>
                          <td>{item.startTime}</td>
                          <td>{item.endTime}</td>
                          <td>{item.course}</td>
                          <td>{item.exam}</td>
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
      </div>{" "}
      {/* row */}
    </div>
  );
};

export default Schedule;
