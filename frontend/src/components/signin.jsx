import React, { Component } from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import NavbarClient from "../components/navbar";
import FooterClient from "../components/footer";
import NAvbarFooter from "../components/navbar";
import "../assets/css/signin.css";
import Man from "../assets/img/woman.png";
import IconMan from "../assets/img/name_user_3716.png";
import Password from "../assets/img/locked-padlock-rounded-black-tool-security-interface-symbol_icon-icons.com_54497.png";
import axios from "axios";
class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handlePassword = event => {
    this.setState({ password: event.target.value });
  };
  handleChange = event => {
    this.setState({ username: event.target.value });
  };
  login = () => {
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    if (user.username != "") {
      if (user.password != "") {
        window.location.href = "http://localhost:3000/delev";
      } else {
        return alert("invalid input");
      }
      return alert("invalid input");
    }
  };
  render() {
    return (
      <>
        <NAvbarFooter />
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
                    <input
                      value={this.state.username}
                      type="text"
                      placeholder="@username"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input_signin">
                    <img src={Password} alt="logo" />
                    <input
                      value={this.state.password}
                      type="password"
                      placeholder="password"
                      onChange={this.handlePassword}
                    />
                  </div>
                  <div className="forgot_div">
                    <a href="#" className="forgot_password">
                      forget login info? click here
                    </a>
                  </div>
                </Form>
                <div className="signin_buttons">
                  <div className="popover_">
                    <button
                      className="button_signup_"
                      onClick={this.login.bind(this)}
                    >
                      login
                    </button>
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
