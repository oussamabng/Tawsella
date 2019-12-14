import React, { Component } from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import NavbarClient from "../components/navbar";
import FooterClient from "../components/footer";
import "../assets/css/signin.css";
import "../assets/css/signup.css";
import Man from "../assets/img/woman.png";
import IconMan from "../assets/img/name_user_3716.png";
import Password from "../assets/img/locked-padlock-rounded-black-tool-security-interface-symbol_icon-icons.com_54497.png";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <main className="main-signin">
          <div className="image_signin">
            <img src={Man} alt="man" />
          </div>
          <Container className="container_signin">
            <div className="padd_signup">
              <div className="form_signin">
                <Form>
                  <Row>
                    <Col className="col_signup">
                      {" "}
                      <div className="input_signin">
                        <input type="text" placeholder="full name" />
                      </div>
                      <div className="split_">
                        <div className="input_signup">
                          <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="city"
                          />
                        </div>
                        <div className="input_signup">
                          <input
                            type="text"
                            name="zip"
                            id="zip"
                            placeholder="zip"
                          />
                        </div>
                      </div>
                      <div className="input_signin">
                        <input type="password" placeholder="phone N°" />
                      </div>
                    </Col>
                    <Col className="col_signup">
                      {" "}
                      <div className="input_signin">
                        <img src={IconMan} alt="logo" />
                        <input type="text" placeholder="@username" />
                      </div>
                      <div className="input_signin">
                        <img src={Password} alt="logo" />
                        <input type="password" placeholder="password" />
                      </div>
                      <div className="input_signin">
                        <img src={Password} alt="logo" />
                        <input type="password" placeholder="confirm password" />
                      </div>
                    </Col>
                  </Row>
                  <div className="agree">
                    <div className="sp_agree">
                      <input type="checkbox" />
                      <p>agree to our terms</p>
                    </div>
                  </div>
                </Form>
                <div className="signup_buttons">
                  <div className="popover_">
                    <button className="button_signup_">sign up</button>
                  </div>
                  <div className="doesnt_have">
                    <p>already have an account?</p>
                    <div className="popover_s">
                      <a href="/signin">
                        <button className="button_signup_si">login</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </main>
      </>
    );
  }
}
export default Signup;
