import React, { Component } from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import NavbarClient from "../components/navbar";
import FooterClient from "../components/footer";
import "../assets/css/signin.css";
import Man from "../assets/img/woman.png";
import IconMan from "../assets/img/name_user_3716.png";
import Password from "../assets/img/locked-padlock-rounded-black-tool-security-interface-symbol_icon-icons.com_54497.png";
class Signin extends Component {
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
                  <div className="input_signin">
                    <img src={IconMan} alt="logo" />
                    <input type="text" placeholder="@username" />
                  </div>
                  <div className="input_signin">
                    <img src={Password} alt="logo" />
                    <input type="password" placeholder="password" />
                  </div>
                  <div className="forgot_div">
                    <a href="#" className="forgot_password">
                      forget login info? click here
                    </a>
                  </div>
                </Form>
                <div className="signin_buttons">
                  <div className="popover_">
                    <button className="button_signup_">login</button>
                  </div>
                  <div className="doesnt_have">
                    <p>doesn't have an account?</p>
                    <div className="popover_s">
                      <a href="/signup">
                        <button className="button_signup_s">sign up</button>
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
export default Signin;
