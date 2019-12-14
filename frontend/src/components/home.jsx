import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  ButtonToolbar,
  Card,
  Table,
  Form,
  Image
} from "react-bootstrap";
import "../assets/css/home.css";

class Home extends Component {
  render() {
    return (
      <main>
        <Jumbotron fluid className="principal">
          <div className="head">
            <h1>a simple, easy and fast service !</h1>
          </div>
          <div className="post">
            <p>choose service</p>
            <ButtonToolbar className="button-tool">
              <button className="del-button"> Deliverer</button>
              <p>--or--</p>
              <button className="send-button">Senderer</button>
            </ButtonToolbar>
          </div>
        </Jumbotron>
        <div>
          <button className="big-button"> Deliverer</button>
          <ButtonToolbar className="button-tool">
            <button className="add-button"> Add</button>
            <button className="re-button"> Refresh</button>
          </ButtonToolbar>
        </div>
        <Card className="second">
          <h2>Choose your tewssila</h2>
          <Card.Body>
            <Table responsive>
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <Form.Row>
                    <Form.Group as={Col} lg="2" controlId="formGridCity">
                      <Image className="avatar"></Image>
                      <p>@user</p>
                      {` `}
                    </Form.Group>
                    <Form.Group as={Col} lg="2" controlId="formGridCity">
                      <Form.Label>from</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} lg="2" controlId="formGridState">
                      <Form.Label>to</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} lg="2" controlId="formGridZip">
                      <Form.Label>Date</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} lg="2" controlId="formGridZip">
                      <Form.Label>pck type</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <button className="take-button">Take</button>
                  </Form.Row>
                </tr>
                <tr>
                  <Form.Row>
                    <Form.Group as={Col} lg="2" controlId="formGridCity">
                      <img className="avatar"></img>
                      <p>@user</p>
                      {` `}
                    </Form.Group>
                    <Form.Group as={Col} lg="2" controlId="formGridCity">
                      <Form.Label>from</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} lg="2" controlId="formGridState">
                      <Form.Label>to</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} lg="2" controlId="formGridZip">
                      <Form.Label>Date</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} lg="2" controlId="formGridZip">
                      <Form.Label>pck type</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <button className="take-button">Take</button>
                  </Form.Row>
                </tr>
                <tr>
                  <Form.Row>
                    <Form.Group as={Col} lg="2" controlId="formGridCity">
                      <img className="avatar"></img>
                    </Form.Group>
                    <Form.Group as={Col} lg="2" controlId="formGridCity">
                      <Form.Label>from</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} lg="2" controlId="formGridState">
                      <Form.Label>to</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} lg="2" controlId="formGridZip">
                      <Form.Label>Date</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} lg="2" controlId="formGridZip">
                      <Form.Label>pck type</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <button className="take-button">Take</button>
                  </Form.Row>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </main>
    );
  }
}

export default Home;
