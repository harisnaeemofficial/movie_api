import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";

import React, { useState } from "react";
import { setRegistration } from "../../actions/actions";
import axios from "axios";
import "./registration-view.scss";

function RegisterView(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios
      .post("https://shashank-my-flix.herokuapp.com/users", {
        Username: username,
        Password: password,
        Email: email
      })
      .then(response => {
        // Assign the result to the state
        props.setRegistration(false);
      })
      .catch(function(error) {
        alert("User already exists or invalid data");
      });

    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
  };

  return (
    <div className="register-wrapper">
      <Form className="col-lg-6 offset-lg-3">
        <h1>Register New User</h1>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex justify-content-around">
          <Button variant="primary" type="button" onClick={handleSubmit}>
            Submit
          </Button>
          <Button
            variant="dark"
            type="button"
            onClick={() => {
              props.setRegistration(false);
            }}
          >
            Back
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default connect(null, { setRegistration })(RegisterView);
