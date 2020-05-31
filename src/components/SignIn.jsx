import React , { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../firebase/base";
import { AuthContext } from "../firebase/Auth";
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';

function SignIn({ history }) {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/loggedin");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const {currentUser} = useContext(AuthContext)|| {};
  console.log(currentUser)
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signin">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1>Sign In</h1>
            <Form onSubmit = {handleLogin}>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
               
                <Button type="submit" class="btn btn-cta my-2 my-sm-0">
                    Submit
                </Button>
            </Form>
          </div>
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(SignIn);