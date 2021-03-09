import React, { useContext }  from "react";
import { Link, withRouter, useHistory } from "react-router-dom";

import "bootstrap/js/src/collapse.js";


function Navigation(props) {

 

  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img class="navbar-logo" src="/images/logo.png" alt="The Loop" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav mr-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/community" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/community">
                  Community
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/groups" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/groups">
                  Group Salons
                </Link>
              </li>
              {/* <li
                class={`nav-item  ${
                  props.location.pathname === "/officehours" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/officehours">
                  Office Hours
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/calendar" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/calendar">
                  Calendar
                </Link>
              </li> */}
              {/* <li
                class={`nav-item  ${
                  props.location.pathname === "/volunteer" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/volunteer">
                  Volunteer
                </Link>
              </li> */}
              <li
                class={`nav-item dropdown  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  About
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link class="dropdown-item" to="/about">Team</Link>
                  <a class="dropdown-item" href="https://medium.com/@helloloopnetwork" target="_blank">Blog</a>
                </div>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li>
                <a href="https://airtable.com/shrrfmA4aGM0GIZXF"><button class="btn btn-primary">Join Us</button></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);