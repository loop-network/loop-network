import React , { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app, { google, auth } from "../firebase/base";
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

  const handleGoogleAuth = ()=> {
    auth.signInWithPopup(google).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  };

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
                <Button type="button" class="btn btn-cta my-2 my-sm-0" onClick = { handleGoogleAuth }>
                    Continue with Google
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