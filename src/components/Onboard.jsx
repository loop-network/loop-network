import React, { useCallback } from "react";
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Dropdown} from 'react-bootstrap';
import { withRouter } from "react-router";

import app, {auth, db} from "../firebase/base";


function Onboard({history}) {

  

  return (
    <div className="signup">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1>Welcome to The Loop!</h1>
            <h2>Tell us about yourself! 
                We will be using this information to make one-on-one matches for you 
                - you can edit this at any time through your profile page.</h2>
            <form >
                <Form.Group controlId="highestEducation">
                    <Form.Label>Highest Education Recieved</Form.Label>
                    {/* <Dropdown>
                        <Dropdown.Toggle variant = "success" id = "dropdown-basic">
                            Select Education
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>High School</Dropdown.Item>
                            <Dropdown.Item>University</Dropdown.Item>
                            <Dropdown.Item>Master's</Dropdown.Item>
                            <Dropdown.Item>PhD</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                    <select className="browser-default custom-select">
                        <option>Choose your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                   
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
    </div>
  );
}

export default withRouter(Onboard);