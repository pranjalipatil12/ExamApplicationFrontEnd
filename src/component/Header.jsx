import React from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate

const Header = () => {
  const navigate = useNavigate(); // initialize navigate

  const handleLogout = () => {
    // Here you can also clear any auth tokens or user data if needed
    navigate("/"); // navigate to Home page
  };

  return (
    <header
      className="navbar navbar-expand-lg navbar-light shadow-sm"
      style={{ background: "linear-gradient(to right, #1e3c72, #2a5298)" }}
    >
      <div className="container-fluid">
        <h4 className="fw-bold">
          <span style={{ color: "#fff" }}>Exam</span>
          <span style={{ color: "#FFD700" }}>App</span>
        </h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <i className="bi bi-bell fs-5 me-3 text-white"></i>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Welcome, Admin
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={handleLogout} // use handleLogout for click
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
