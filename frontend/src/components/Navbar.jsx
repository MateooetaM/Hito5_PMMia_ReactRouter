import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar">
      <div className="nav-elements">
        <h1 class="fs-5 text-light">¡Pizzería Mamma Mia!</h1>
        <div className="nav-button">
          <Link class="btn btn-outline-light" to="/">
            🍕 Home
          </Link>
          {token != true ? (
            <>
              <Link class="btn btn-outline-light" to="/profile">
                🔓 Profile
              </Link>
              <Link class="btn btn-outline-light" to="/">
                🔒 Logout
              </Link>
            </>
          ) : (
            <>
              <Link class="btn btn-outline-light" to="/login">
                {" "}
                🔐 Login
              </Link>
              <Link class="btn btn-outline-light" to="/register">
                {" "}
                🔐 Register
              </Link>
            </>
          )}
        </div>

        <div className="button-derecha">
          <Link class="btn btn-outline-info" to="/cart">
            🛒 Total: ${total.toLocaleString()}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
