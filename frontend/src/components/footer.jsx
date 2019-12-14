import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../assets/css/footer.css";
import Logo1 from "../assets/img/élément-1.png";
import Logo2 from "../assets/img/élément-2.png";
import Logo3 from "../assets/img/élément-3.png";

class FooterClient extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="footer_m font-small pt-4 mt-4 footer">
        <Container className="footer-container">
          <div className="main_footer">
            <Row>
              <Col className="footer_col">
                <a href="#">
                  {" "}
                  <img src={Logo1} alt="logo" />
                </a>
              </Col>
              <Col className="footer_col">
                <a href="#">
                  {" "}
                  <img src={Logo2} alt="logo" />
                </a>{" "}
              </Col>
              <Col className="footer_col">
                <a href="#">
                  {" "}
                  <img src={Logo3} alt="logo" />
                </a>{" "}
              </Col>
            </Row>
          </div>
          <div className="main_footer">
            <Row className="Contact_about">
              <Col>
                <a href="#">contact us</a>
              </Col>
              <Col>
                <a href="#">about us</a>
              </Col>
            </Row>
          </div>
          <div className="main_footer">
            <p>©2019 Copyright, All Rights Reserved </p>
          </div>
        </Container>
      </footer>
    );
  }
}
export default FooterClient;
