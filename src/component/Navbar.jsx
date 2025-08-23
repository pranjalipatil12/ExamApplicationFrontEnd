// Navbar.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";   // ✅ Framer Motion
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css"; // ✅ Bootstrap Icons

const Navbar = () => {
  const navRef = useRef(null);

  const closeNavbar = () => {
    const collapseEl = navRef.current;
    if (collapseEl && collapseEl.classList.contains("show")) {
      new window.bootstrap.Collapse(collapseEl, { toggle: false }).hide();
    }
  };

  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ background: "linear-gradient(to right, #6a11cb, #ff0066)" }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container-fluid">
        {/* Brand Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            className="navbar-brand d-flex align-items-center"
            to="/"
            onClick={closeNavbar}
          >
            <i className="bi bi-mortarboard-fill me-2"></i> ExamApp
          </Link>
        </motion.div>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="mainNav"
          ref={navRef}
        >
          <ul className="navbar-nav align-items-center">
            {/* Home */}
            <motion.li className="nav-item px-2" whileHover={{ scale: 1.1 }}>
              <Link className="nav-link text-white" to="/" onClick={closeNavbar}>
                <i className="bi bi-house-door-fill me-1"></i> Home
              </Link>
            </motion.li>

            {/* About */}
            <motion.li className="nav-item px-2" whileHover={{ scale: 1.1 }}>
              <Link className="nav-link text-white" to="/About" onClick={closeNavbar}>
                <i className="bi bi-info-circle-fill me-1"></i> About
              </Link>
            </motion.li>

            {/* Contact */}
            <motion.li className="nav-item px-2" whileHover={{ scale: 1.1 }}>
              <Link className="nav-link text-white" to="/Contact" onClick={closeNavbar}>
                <i className="bi bi-envelope-fill me-1"></i> Contact
              </Link>
            </motion.li>

            {/* Register */}
            <motion.li className="nav-item px-2" whileHover={{ scale: 1.1 }}>
              <Link className="nav-link text-white" to="/userlogin" onClick={closeNavbar}>
                <i className="bi bi-person-plus-fill me-1"></i> Register
              </Link>
            </motion.li>

           

            {/* Dropdown Login */}
            <motion.li className="nav-item dropdown px-2" whileHover={{ scale: 1.05 }}>
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-box-arrow-in-right me-1"></i> Login
              </a>
              <ul className="dropdown-menu dropdown-menu-end shadow">
                <li>
                  <Link className="dropdown-item" to="/adminlogin" onClick={closeNavbar}>
                    <i className="bi bi-person-gear me-1 text-black"></i> Admin Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/studentlogin" onClick={closeNavbar}>
                    <i className="bi bi-people-fill me-1 text-black"></i> Student Login
                  </Link>
                </li>
              </ul>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
