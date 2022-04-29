import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Making an App
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Sections
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/authentication" className="nav-link">
                    Authentication
                  </NavLink>
                  <li className="nav-item">
                    <NavLink to="/crud" className="nav-link">
                      C.R.U.D.
                    </NavLink>
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
