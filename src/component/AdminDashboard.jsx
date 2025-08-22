import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import AdminHome from "./AdminHome";
import Subjects from "./Subjects";
import Exams from "./Exams";
import Questions from "./Questions";
import Schedule from "./Schedule";
import AdminRegister from "./AdminRegister";
import Result from"./Result";
import { useLocation } from "react-router-dom";
const AdminDashboard = () => {
let location=useLocation();

let admin=location.state?.admin;
console.log(admin);
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Page Content */}
      <div
        className="flex-grow-1 p-4"
        style={{ backgroundColor: "#f5f7fa", minHeight: "100vh" }}
      >
        <Routes>
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/Result"element={<Result/>}/>
          <Route path="/admin-register" element={<AdminRegister />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
