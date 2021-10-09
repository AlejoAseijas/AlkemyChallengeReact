/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  function handlerClick() {
    localStorage.removeItem("token");
    window.reload();
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to={"/"}> Alkemy Challenge Heroe App </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to={"/search"}> Search Heroe </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={handlerClick}
          >
            LogOut
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
