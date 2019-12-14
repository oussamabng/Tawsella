import React, { Component } from "react";
import { Navbar, Nav, Row, Col, Container } from "react-bootstrap";
import "../assets/css/landing.css";
import Logo1 from "../assets/img/mbridelivery_99588rfrf.png";
import Man from "../assets/img/man.png";
import Logo from "../assets/img/Groupe 31.png";
import Logo2 from "../assets/img/mbricash_-1.png";
import Logo3 from "../assets/img/careshippingservicehandlingpackage_109799ezf.png";
import Img1 from "../assets/img/1.png";
import Img2 from "../assets/img/2.png";
import Img3 from "../assets/img/3.png";
import Delevery from "../assets/img/fast-delivery_116471.png";
import Delev from "../assets/img/delev.png";
import Sender from "../assets/img/Groupe -7.png";
import Send from "../assets/img/send.png";
import NavbarClient from "../components/navbar";
import FooterClient from "../components/footer";
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <main className="main_landing">
          <section className="getting_started">
            <Row>
              <Col md="6">
                <div className="gett_start">
                  <h1>a simple , fast and easy service</h1>
                  <p>wanna deliver something as soon </p>
                  <p>as possible?</p>
                  <p>or get some extra money during </p>
                  <p>your daily travels?</p>
                </div>
                <div className="icon_bott">
                  <img src={Logo1} alt="logo" />
                </div>
                <div className="bott">
                  <div className="getting_started-btn">
                    <div className="popover">
                      <button className="button_signup_learn bg-white">
                        Get started
                      </button>
                    </div>
                    <div className="popover ml-5">
                      <button
                        className="button_signup_learn"
                        style={{ color: "white" }}
                      >
                        learn more
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="middle_man">
                  <img src={Man} alt="logo" />
                </div>
              </Col>
              <Col className="col_right" md="3">
                <div className="end_man">
                  <div className="top_icon">
                    {" "}
                    <img src={Logo2} alt="logo" />
                  </div>
                </div>
                <div className="middle_icon">
                  <div className="_right">
                    <img src={Logo3} alt="logo" />
                  </div>
                  <div className="_left">
                    <div className="logo_icon">
                      <img src={Logo} alt="logo" />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
          <section className="_why">
            <Container fluid className="container_why">
              <Row className="why_row1">
                <Col>
                  <div className="why_title">
                    <h3>why choosing Tawssela ?</h3>
                  </div>
                </Col>
              </Row>
              <Row className="why_row2">
                <Col md="4">
                  <div className="why_items">
                    <img src={Img1} alt="img1" />
                    <div className="title_why">
                      <p>Secured</p>
                    </div>
                    <p className="why_p">we provide you secure service</p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="why_items">
                    <img src={Img3} alt="img1" />
                    <div className="title_why">
                      <p>Extra cash</p>
                    </div>
                    <div className="why_p">
                      <p> get some extra money delivering people's stuffs </p>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="why_items">
                    <img src={Img2} alt="img1" />
                    <div className="title_why">
                      <p>Delivery all time</p>
                    </div>
                    <p className="why_p">
                      people travel all time , so they can deliver your stuff
                      anywhere and anytime
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="spacer_section"></section>
          <section className="_how">
            <Container fluid className="container_why">
              <Row className="why_row1">
                <Col>
                  <div className="why_title">
                    <h3>how does it work ?</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="_how_part2">
            <Container className="container_how">
              <Row className="how_row">
                <Col md="4" className="col_how">
                  <div className="img_how">
                    <img src={Delevery} alt="delevey" />
                  </div>
                </Col>
                <Col md="8" className="col_how">
                  <div className="how_details">
                    <img src={Delev} alt="lo" />
                    <p>
                      {" "}
                      if you want to get some extra cash during your trip to
                      somewhere , you can be a Deliverer and take other's people
                      stuff ,our website provide youthis service. by being a
                      Deliverer you can post in our website the place you 'll go
                      to and the time , and people who want to send their stuffs
                      will contact you, and you will deliver it after you make
                      deal and agree to our security terms.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="col_sp">
                <Col md="3">
                  <div className="spacer_how"></div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="_how_part1">
            <Container className="container_how">
              <Row className="how_row">
                <Col md="8" className="col_how">
                  <div className="how_details">
                    <img src={Sender} alt="lo" />
                    <p>
                      {" "}
                      if you want to get some extra cash during your trip to
                      somewhere , you can be a Deliverer and take other's people
                      stuff ,our website provide youthis service. by being a
                      Deliverer you can post in our website the place you 'll go
                      to and the time , and people who want to send their stuffs
                      will contact you, and you will deliver it after you make
                      deal and agree to our security terms.
                    </p>
                  </div>
                </Col>
                <Col md="4" className="col_how">
                  <div className="img_how_send">
                    <img src={Send} alt="delevey" />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="GetStart_bottom">
            <Container fluid className="container_why">
              <Row className="last_row">
                <div className="ButtonGettingStarted">
                  <button>Get started</button>
                </div>{" "}
              </Row>
            </Container>
          </section>
          <section className="spacer_section"></section>
        </main>
      </>
    );
  }
}
export default Landing;
