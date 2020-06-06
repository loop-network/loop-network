import React, { useCallback } from "react";
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';
import { withRouter } from "react-router";

import app, {auth, db} from "../firebase/base";


function SignUp({history}) {

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { formBasicEmail, formBasicPassword } = event.target.elements;
        console.log(formBasicEmail.value);

       
        try {
          await app
            .auth()
            .createUserWithEmailAndPassword(formBasicEmail.value, formBasicPassword.value)
            .then(cred => {return db.collection('users').doc(cred.user.uid).set({
                // username: username.value,
                email: formBasicEmail.value,
                password: formBasicPassword.value,
                userId: auth.currentUser.uid
    
              })
           
            });
          history.push("/");
        } catch (error) {
          alert(error);
        }
      }, [history]);

  return (
    <div className="signup">
      <section class="blue-background">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-5">
              <h1>Join Us</h1>
              <form onSubmit={handleSignUp}>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                
                  <Button type="submit" class="btn btn-cta my-2 my-sm-0">
                      Submit
                  </Button>
              </form>
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
      </section>
    </div>
  );
}

export default withRouter(SignUp);