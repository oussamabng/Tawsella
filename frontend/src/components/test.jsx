import React, { Component } from "react";
import {
  Card,
  Table,
  Form,
  Image,
  Nav,
  Row,
  Col,
  Container
} from "react-bootstrap";
import "../assets/css/test.css";
import { render } from "@testing-library/react";
import Man from "../assets/img/man_vol2.png";
import NavbarAdmin from "../components/navbarAdmin";
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <NavbarAdmin />
        <main className="main_home">
          <section className="section_home">
            <Row className="row_home">
              <Col>
                <div className="title_home">
                  <h1>a simple , fast and easy service</h1>
                </div>
              </Col>
            </Row>
            <Row className="he">
              <Col>
                <div className="choose_home">
                  <div className="choose_title">
                    <p>choose service</p>
                  </div>
                  <div className="delev_or_send">
                    <div className="delev_home">
                      <div className="popover">
                        <a href="/delev">
                          <button className="button_signup_learn_home">
                            Deliverer
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="or_">
                      <h1 className="spec_h1">or</h1>
                    </div>
                    <div className="delev_home">
                      <div className="popover">
                        <a href="/sender">
                          <button className="button_signup_learn_send">
                            Sender
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="delev_row">
              <Col>
                <div className="delivrer_butt">
                  <div className="delev_p">
                    <p>Deliverer</p>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="tt">
              <img src={Man} alt="man" />
            </div>
          </section>
          <section className="section_table_home">
            <Row className="row_table">
              <Col>
                <div className="cont_option_table">
                  <div className="titi">
                    <div className="button_opt">
                      <div className="popover_opt">
                        <button className="button_signup_learn_opt">
                          filter
                        </button>
                      </div>
                    </div>
                    <div className="button_opt">
                      <div className="popover_opt">
                        <button className="button_signup_learn_opt">
                          hestory
                        </button>
                      </div>
                    </div>{" "}
                    <div className="button_opt_vol2">
                      <div className="popover_opt">
                        <button className="button_signup_learn_opt2">
                          Refresh
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
          <section className="table_board">
            <div className="table_div">
              <div className="tble_title">
                <h2>Choose your tewssila</h2>
              </div>

              <Card className="second">
                <Card.Body className="table_body">
                  <Table responsive>
                    <thead>
                      <tr></tr>
                    </thead>
                    <tbody>
                      <tr className="tr_table_vip">
                        <Form.Row>
                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridCity"
                          >
                            <div className="heaeding">
                              <div className="coll">
                                <div className="avatar"></div>
                                <p>@user</p>
                              </div>

                              {` `}
                            </div>
                          </Form.Group>
                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridCity"
                          >
                            <Form.Label>from</Form.Label>
                            <Form.Control className="input_table" />
                          </Form.Group>

                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridState"
                          >
                            <Form.Label>to</Form.Label>
                            <Form.Control className="input_table" />
                          </Form.Group>

                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridZip"
                          >
                            <Form.Label>Date</Form.Label>
                            <Form.Control className="input_table" />
                          </Form.Group>
                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridZip"
                          >
                            <Form.Label>pck type</Form.Label>
                            <Form.Control className="input_table" />
                          </Form.Group>

                          <button className="vip-button">Take</button>
                        </Form.Row>
                      </tr>
                      <div className="spacer_table"></div>

                      <tr className="tr_table">
                        <Form.Row>
                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridCity"
                          >
                            <div className="heaeding">
                              <div className="coll">
                                <div className="avatar"></div>
                                <p>@user</p>
                              </div>

                              {` `}
                            </div>
                          </Form.Group>
                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridCity"
                          >
                            <Form.Label>from</Form.Label>
                            <Form.Control className="input_table" />
                          </Form.Group>

                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridState"
                          >
                            <Form.Label>to</Form.Label>
                            <Form.Control className="input_table" />
                          </Form.Group>

                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridZip"
                          >
                            <Form.Label>Date</Form.Label>
                            <Form.Control className="input_table" />
                          </Form.Group>
                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridZip"
                          >
                            <Form.Label>pck type</Form.Label>
                            <Form.Control className="input_table" />
                          </Form.Group>
                          <button className="take-button">Take</button>
                        </Form.Row>
                      </tr>
                      <div className="spacer_table"></div>
                      <tr className="tr_table">
                        <Form.Row>
                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridCity"
                          >
                            <div className="heaeding">
                              <div className="coll">
                                <div className="avatar"></div>
                                <p>@user</p>
                              </div>

                              {` `}
                            </div>
                          </Form.Group>
                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridCity"
                          >
                            <Form.Label>from</Form.Label>
                            <Form.Control className="input_table" />
                          </Form.Group>

                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridState"
                          >
                            <Form.Label>to</Form.Label>
                            <Form.Control className="input_table" />
                          </Form.Group>

                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridZip"
                          >
                            <Form.Label>Date</Form.Label>
                            <Form.Control className="input_table" />
                          </Form.Group>
                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridZip"
                          >
                            <Form.Label>pck type</Form.Label>
                            <Form.Control className="input_table" />
                          </Form.Group>

                          <button className="take-button">Take</button>
                        </Form.Row>
                      </tr>
                      <div className="spacer_table"></div>
                      <tr className="tr_table_x">
                        <Form.Row>
                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridCity"
                          >
                            <div className="heaeding">
                              <div className="coll">
                                <div className="avatar"></div>
                                <p>@user</p>
                              </div>

                              {` `}
                            </div>
                          </Form.Group>
                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridCity"
                          >
                            <Form.Label>from</Form.Label>
                            <Form.Control className="input_table" />
                          </Form.Group>

                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridState"
                          >
                            <Form.Label>to</Form.Label>
                            <Form.Control className="input_table" />
                          </Form.Group>

                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridZip"
                          >
                            <Form.Label>Date</Form.Label>
                            <Form.Control className="input_table" />
                          </Form.Group>
                          <Form.Group
                            className="avatar_"
                            as={Col}
                            lg="2"
                            controlId="formGridZip"
                          >
                            <Form.Label>pck type</Form.Label>
                            <Form.Control className="input_table" />
                          </Form.Group>
                          <button className="tooken-button">Tooken</button>
                        </Form.Row>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </div>
          </section>
          <section className="addDelev">
            <div className="main_add_delev">
              <Row className="main-row">
                <Col>
                  <div className="add_title">
                    <h1>Add as a deliverer</h1>
                  </div>
                </Col>
              </Row>
              <Container className="cnt">
                <Row>
                  <Col>
                    <div className="from_city">
                      <div className="input_signin_i">
                        <p>from</p>
                        <input type="text" placeholder="city,wilaya" />
                      </div>
                      <div className="input_signin_">
                        <p>date</p>
                        <input id="uu" type="date" placeholder="ssss" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="from_city">
                      <div className="input_signin_i">
                        <p>to</p>
                        <input type="text" placeholder="city,wilaya" />
                      </div>
                      <div className="popover okioki">
                        <button className="button_signup_learn_home xxx">
                          confirm
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>
        </main>
      </>
    );
  }
}
export default Test;
