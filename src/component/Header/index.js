import React from "react";
import "./style.css";

function Header() {
  return (
    <div>
      <div className="topnav">
        <a className="active">Home</a>
        <a>About</a>
        <a>Contact</a>
        <div className="search-container">
          <form>
            <input type="text" placeholder="Search.." name="search" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
