import React, { Component } from "react";
import "./navbar.css";
import { Nav } from 'react-bootstrap';
import menu from '../../images/menu/mobile_menu.png'
import logo from '../../images/logo/snubes-logo@3x.png'


const onclickMenu = () => {
  // console.log("menuclick")
}
function Navbar() {
  return (
    <div className="main_banner sticky-top">
      <Nav className="navbar navbar-expand-lg navbar-dark transparent-nav nav-js">

        <img src={logo} className="logo_icon" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={onclickMenu}
        >
          <img src={menu} className="menu_icon" />

        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav changecolor">

            <Nav.Link className="nav-item nav-link active" to="/">

              <span style={{ color: '#7f7f7f' }}>Home</span>
            </Nav.Link>
            <Nav.Link className="nav-item nav-link active" to="/">

              <span style={{ color: '#7f7f7f', padding: "0rem 1rem" }}>Home</span>
            </Nav.Link>
            <Nav.Link className="nav-item nav-link active" to="/">

              <span style={{ color: '#7f7f7f', padding: "0rem 1rem" }}>Home</span>
            </Nav.Link>
            <Nav.Link className="nav-item nav-link active" to="/">

              <span style={{ color: '#7f7f7f', padding: "0rem 1rem" }}>Home</span>
            </Nav.Link>
            <Nav.Link className="nav-item nav-link active" to="/">

              <span style={{ color: '#7f7f7f', padding: "0rem 1rem" }}>Home</span>
            </Nav.Link>
          </div>
        </div>
      </Nav>

      {/* <Route path="/me" exact render={() => <h1>hello</h1> } />
      <Route path="/home" exact component={Latest} /> */}
    </div>

  );
}

export default Navbar;
