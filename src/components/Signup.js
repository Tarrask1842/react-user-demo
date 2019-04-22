import React, { Component } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

class Signup extends Component {
  render() {
    return (
      <div className="su-form">
        <Card style={{ width: '25rem', margin: "auto", marginTop: "5%", boxShadow: "0px 0px 7px 3px rgba(54,133,173,1)", marginBottom: "5px" }}>
          <Card.Body>
            <div className="su-ava">
              <i class="fas fa-2x fa-user-plus"></i>
            </div>
            <h3 className="su-title">Create Account</h3>
            <Form>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Email" required />
            </Form.Group>
            <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button block variant="primary" type="submit" id="button">
              Sign Up
            </Button>
            </Form>
          </Card.Body>
          <Card.Footer id="footer">
            <div className="ftr">Already have an account?<Link to="react-user-demo/login"> Log In</Link></div>
          </Card.Footer>
        </Card>   
      </div>           
    )
  }
}

export default Signup;