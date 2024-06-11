import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import styles from "../css/Navbar.module.css"

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      window.location.reload();
    }
  };

  return (
    <div className={styles.main}>
      <h1 onClick={() => navigate("/")}>Project Tracker</h1>
      <ul>
        {isLoggedIn && <li onClick={handleLogout}>Logout</li>}
        {!isLoggedIn && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
