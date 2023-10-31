import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./CSS/Navbar.css";
const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid nav-hamberg">
          <a className="navbar-brand" href="#">
            <h4>Offcrunch</h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${
                    pathname.length === 0 ? "active" : ""
                  }`}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/work"
                  className={`nav-link ${
                    pathname.includes("work") ? "active" : ""
                  }`}
                >
                  Work Areas
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/technologies"
                  className={`nav-link ${
                    pathname.includes("technologies") ? "active" : ""
                  }`}
                >
                  Technologies
                </Link>
              </li>

         

              <li className="nav-item">
                <Link
                  to="/careers"
                  className={`nav-link ${
                    pathname.includes("careers") ? "active" : ""
                  }`}
                >
                  Careers
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contact-us"
                  className={`nav-link ${
                    pathname.includes("contact-us") ? "active" : ""
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
