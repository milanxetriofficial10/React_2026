// navbar create in react project here so now
import React from "react";
import "./css/Navbar.css";
function Navbar() {
  return (
    <header className="navbar">
      <h2 className="logo">Milan Programmer</h2>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#milan">Milan</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="search-box">
        <input type="text" placeholder="  Search.."/>
        <br /> <br />
         <a href=""><button className="btn">Login</button></a>
      </div>

    </header>
  );
}

export default Navbar;
