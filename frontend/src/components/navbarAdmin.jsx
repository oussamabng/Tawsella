import React, { Component } from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import "../assets/css/navbar.css";
import Logo from "../assets/img/Groupe 31.png";
class NavbarAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="main_header">
        <div className="main_navbar">
          <a href="/home" className="main_logo">
            <img src={Logo} alt="logo" />
          </a>
          <span className="spacer"></span>
          <div className="test">
            <ul className="nav-links navbar_items">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="" style={{ color: "#008e8b" }}>
                  Your profil
                </a>
              </li>
              <li>
                <a href="">How does it work?</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <div className="popover">
                  <a href="/" className="button_signup">
                    sign out
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
export default NavbarAdmin;
