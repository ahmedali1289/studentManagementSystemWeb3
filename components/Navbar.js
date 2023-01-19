import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { StudentsContext } from "../context/StudentsApp";
const Navbar = () => {
  const { connectWallet, addStudent, currentAccount, studentsList } =
    useContext(StudentsContext);
  const disconnect = () => {
    // window.ethereum.close()
    window.ethereum.autoRefreshOnNetworkChange = false;
  };
  return (
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Teachers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Students
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Login
              </a>
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
                {currentAccount ? (
                  <label className="white ms-3">
                    {currentAccount.slice(0, 15)}
                  </label>
                ) : null}
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
  );
};

export default Navbar;
