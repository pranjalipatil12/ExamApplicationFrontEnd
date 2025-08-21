// Navbar.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";   // ✅ Import framer-motion
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
      initial={{ y: -100, opacity: 0 }}   // Start above screen
      animate={{ y: 0, opacity: 1 }}      // Slide down
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
    >
      <div className="container-fluid">
        <motion.div whileHover={{ scale: 1.05 }}> 
          <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeNavbar}>
            <i className="bi bi-mortarboard-fill me-2"></i> ExamApp
          </Link>
        </motion.div>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="mainNav" ref={navRef}>
          <ul className="navbar-nav align-items-center">
            <motion.li className="nav-item px-2" whileHover={{ scale: 1.1 }}>
              <Link className="nav-link text-white" to="/" onClick={closeNavbar}>Home</Link>
            </motion.li>
            <motion.li className="nav-item px-2" whileHover={{ scale: 1.1 }}>
              <Link className="nav-link text-white" to="/About" onClick={closeNavbar}>About</Link>
            </motion.li>
            <motion.li className="nav-item px-2" whileHover={{ scale: 1.1 }}>
              <Link className="nav-link text-white" to="/Contact" onClick={closeNavbar}>Contact</Link>
            </motion.li>
            {/* Register link */}
            <motion.li className="nav-item px-2" whileHover={{ scale: 1.1 }}>
              <Link className="nav-link text-white" to="/userlogin" onClick={closeNavbar}>Register</Link>
            </motion.li>

            {/* Dropdown */}
            <motion.li className="nav-item dropdown px-2" whileHover={{ scale: 1.05 }}>
              <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
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
