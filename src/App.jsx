// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import AdminLogin from "./component/AdminLogin";
import User from "./component/Registeraction";
import StudentLogin from "./component/StudentLogin";
import Contact from "./component/Contact";
import About from "./component/About";
import ForgotPassword from "./component/ForgotPassword";
import StudentDashboard from "./component/StudentDashboard";
import ExamList from "./component/ExamList";   // ✅ Added ExamList

// Admin Pages
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import AdminHome from "./component/AdminHome";
import Subjects from "./component/Subjects";
import Exams from "./component/Exams";
import Questions from "./component/Questions";
import Schedule from "./component/Schedule";
import Result from "./component/Result";
import AdminRegister from "./component/AdminRegister";

// ✅ Wrapper for Admin Pages (Header + Sidebar)
const AdminWrapper = ({ children }) => (
  <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
    <Header />
    <div className="d-flex flex-grow-1">
      <Sidebar />
      <div className="flex-grow-1 p-3" style={{ backgroundColor: "#f8f9fa" }}>
        {children}
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Home Page with Navbar */}
        <Route path="/" element={<><Navbar /><Home /></>} />

        {/* Public Pages (no navbar) */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/userlogin" element={<User />} />
        <Route path="/studentlogin" element={<StudentLogin />} />

        {/* ✅ Student Pages */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-dashboard/exams" element={<ExamList />} />  {/* ✅ Added */}

        {/* Forgot Password */}
        <Route path="/admin-forgot-password" element={<ForgotPassword />} />
        <Route path="/student-forgot-password" element={<ForgotPassword />} />

        {/* Admin Pages */}
        <Route path="/adminhome" element={<AdminWrapper><AdminHome /></AdminWrapper>} />
        <Route path="/subjects" element={<AdminWrapper><Subjects /></AdminWrapper>} />
        <Route path="/exams" element={<AdminWrapper><Exams /></AdminWrapper>} />
        <Route path="/questions" element={<AdminWrapper><Questions /></AdminWrapper>} />
        <Route path="/schedule" element={<AdminWrapper><Schedule /></AdminWrapper>} />
        <Route path="/result" element={<AdminWrapper><Result /></AdminWrapper>} />
        <Route path="/admin-register" element={<AdminWrapper><AdminRegister /></AdminWrapper>} />
      </Routes>
    </Router>
  );
}

export default App;
