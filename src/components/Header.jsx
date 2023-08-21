import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <span>BOUTIQUE</span>
      </div>
      <div className="header-buttons">
        <a href="/signin">Sign in</a>
      </div>
    </div>
  );
};

export default Header;
