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
    <div className={styles.header}>
      <div className={styles.headerleft}>
      <h1  onClick={() => navigate("/")}>Project Tracker</h1>
      </div>
      <div className={styles.headerright}>
        {isLoggedIn && <button  onClick={handleLogout}>Logout</button>}
        {!isLoggedIn && (
            <NavLink to="/login">Login</NavLink>
        )}
        {!isLoggedIn && (
            <NavLink to="/signup">Signup</NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
