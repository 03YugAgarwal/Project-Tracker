import React from "react";
import "./App.css"; // Make sure to create a CSS file for styling

const Header = ({ onHomeClick, onChangeProjectClick, onLogoutClick }) => {
  return (
    <div className="header">
      <div className="header-left">
        <h1>Project Tracker</h1>
      </div>
      <div className="header-right">
        <button onClick={onHomeClick}>Home Page</button>
        <button onClick={onChangeProjectClick}>Change Project</button>
        <button onClick={onLogoutClick}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
