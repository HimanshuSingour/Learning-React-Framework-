import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top bg-dark ">
        <a className="navbar-brand" href="/welcome">
          NewsCyber
        </a>

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
            <li className="nav-item active">
              <a className="nav-link" href="/home">
                Home{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contactus">
                Contact Us
              </a>
            </li>

            <li className="nav-item mx-5">
              <a className="nav-link" href="/socialmedia">
                Social Handler
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
