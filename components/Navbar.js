import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../context/AppContext";
import Link from "next/link";
const Navbar = () => {
  const { connectWallet, addStudent, currentAccount, studentsList } =
    useContext(AppContext);
  const disconnect = () => {
    // window.ethereum.close()
    window.ethereum.autoRefreshOnNetworkChange = false;
  };
  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-dark w-100">
      <div className="container-fluid">
        <a className="navbar-brand">Student Management System</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/teachers">Teachers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/students/allStudents">Students</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/courses/allCourses">Courses</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-center"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faUser} />
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item text-center">
                    {currentAccount ? (
                      <button className="white text-center" disabled>
                        {currentAccount}
                      </button>
                    ) : (
                      <button
                        className="white text-center"
                        onClick={() => connectWallet()}
                      >
                        Connect Wallet
                      </button>
                    )}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
