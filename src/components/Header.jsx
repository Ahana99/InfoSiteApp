import React from "react";
import { Outlet, Link } from "react-router-dom";
import useAppContext from "../custom_hooks/useAppContext";

export default function Header() {
  const context = useAppContext();

  function handleLogout(){
    context.dispatch({
      type: "NO_USER",
      name:  "no_user"
    });
  }

  return (
    <div>
      <div className="header">
        <Link to="/" className="button">
          Home
        </Link>
        <Link to="/about" className="button">
          About Us
        </Link>
        <Link to="/users" className="button">
          Our Users
        </Link>
        <Link to="/gallery" className="button">
          Gallery
        </Link>
        <Link to="/contact" className="button">
          Contact Us
        </Link>
        <button className="button--logout" onClick={() => handleLogout()}>
          Log Out
        </button>
      </div>
      <Outlet />
    </div>
  );
}
