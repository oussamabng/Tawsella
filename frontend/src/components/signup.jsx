import React, { Component } from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import NavbarClient from "../components/navbar";
import FooterClient from "../components/footer";
import "../assets/css/signin.css";
import "../assets/css/signup.css";
import Man from "../assets/img/woman.png";
import IconMan from "../assets/img/name_user_3716.png";
import Password from "../assets/img/locked-padlock-rounded-black-tool-security-interface-symbol_icon-icons.com_54497.png";
import axios from "axios";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password1: "",
      password2: "",
      city: "",
      zip: "",
      phone: "",
      fullname: ""
    };
  }
  onChangeHandler = evt => {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value
    });
  };
  register = () => {
    if (this.state.password1 != this.state.password2) {
      return alert("passwords are not the same");
    } else {
    }
    const user = {
      username: this.state.username,
      password: this.state.password1,
      city: this.state.city,
      zip: this.state.zip,
      phone: this.state.phone,
      fullname: this.state.fullname
    };
    axios
      .post(`https://localhost:8080/api/signup`, { user })
      .then(res => {
        window.localStorage.setItem("token", res.token);
        window.location.href = "localhost:3000/test";
      })
      .catch(() => {
        return alert("invalid inputs");
      });
  };
  render() {
    return (
      <>
        <NavbarClient />
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
                        <input
                          value={this.state.fullname}
                          type="text"
                          name="fullname"
                          placeholder="full name"
                          onChange={this.onChangeHandler.bind(this)}
                        />
                      </div>
                      <div className="split_">
                        <div className="input_signup">
                          <input
                            value={this.state.city}
                            type="text"
                            name="city"
                            id="city"
                            placeholder="city"
                            onChange={this.onChangeHandler.bind(this)}
                          />
                        </div>
                        <div className="input_signup">
                          <input
                            value={this.state.zip}
                            type="text"
                            name="zip"
                            id="zip"
                            placeholder="zip"
                            onChange={this.onChangeHandler.bind(this)}
                          />
                        </div>
                      </div>
                      <div className="input_signin">
                        <input
                          value={this.state.phone}
                          type="phone"
                          name="phone"
                          placeholder="phone N°"
                          onChange={this.onChangeHandler.bind(this)}
                        />
                      </div>
                    </Col>
                    <Col className="col_signup">
                      {" "}
                      <div className="input_signin">
                        <img src={IconMan} alt="logo" />
                        <input
                          value={this.state.username}
                          type="text"
                          placeholder="@username"
                          name="username"
                          onChange={this.onChangeHandler.bind(this)}
                        />
                      </div>
                      <div className="input_signin">
                        <img src={Password} alt="logo" />
                        <input
                          value={this.state.password1}
                          type="password"
                          name="password1"
                          placeholder="password"
                          onChange={this.onChangeHandler.bind(this)}
                        />
                      </div>
                      <div className="input_signin">
                        <img src={Password} alt="logo" />
                        <input
                          value={this.state.password2}
                          type="password"
                          name="password2"
                          placeholder="confirm password"
                          onChange={this.onChangeHandler.bind(this)}
                        />
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
                    <button
                      className="button_signup_"
                      onClick={this.register.bind(this)}
                    >
                      sign up
                    </button>
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
