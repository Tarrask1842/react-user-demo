import React, { Component } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="li-form">
        <Card style={{ width: '25rem', margin: "auto", marginTop: "5%", boxShadow: "0px 0px 7px 3px rgba(54,133,173,1)", marginBottom: "5px" }}>
          <Card.Body>
            <div className="li-ava">
              <i class="fas fa-2x fa-user-check"></i>
            </div>
            <h3 className="li-title">Log In</h3>
            <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button block variant="primary" type="submit" id="button">
              Log In
            </Button>
            </Form>
          </Card.Body>
          <Card.Footer>
            <div className="ftr">Not a Member?<Link to=""> Sign Up</Link></div>
          </Card.Footer>
        </Card>   
      </div>   
    )
  }
}

export default Login;