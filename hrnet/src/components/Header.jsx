import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-WH.jpg";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logoContainer">
          <img src={logo} alt="logo" />
          <Link to="/"></Link>
        </div>
        <div className="title">
          <Link to="/"> Wealth Health </Link>
        </div>
        <div className="createButtonContainer">
          <button className="button">
            <Link to="/create-employee">Create New Employee</Link>
          </button>
        </div>
        <div className="listButtonContainer">
          <button className="button">
            <Link to="/employee-list">View Current Employees</Link>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
