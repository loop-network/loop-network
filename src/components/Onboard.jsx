import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Checkbox,
  Radio,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { withRouter } from "react-router";

import app, { auth, db } from "../firebase/base";

function Onboard({ history }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      highestEducation,
      workExperience,
      position,
    } = event.target.elements;
    console.log(highestEducation.value);
  };

  const [highestEd, setEd] = useState("Select Education");

  const [position, setPos] = useState("Select Position");
  const [sector, setSector] = useState("Select Sector");
  const [expertise, setExpertise] = useState("Select Expertise");
  const [startupStage, setStartupStage] = useState("Select Stage");
  const [matchFormat, setMatchFormat] = useState("Select match format");
  const handleEdChange = (e) => {
    console.log("handleChange");
    console.log(e);
  };

  return (
    <div className="signup">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1>Welcome to The Loop!</h1>
            <h2>
              Tell us about yourself! We will be using this information to make
              one-on-one matches for you - you can edit this at any time through
              your profile page.
            </h2>
            <form onSubmit={handleSubmit}>
              <Form.Group controlId="highestEducation">
                <Form.Label>Highest Education Recieved</Form.Label>

                {/* <select className="browser-default custom-select">
                        <option>Choose your option</option>
                        <option value="1">High School</option>
                        <option value="2">College Undergraduate</option>
                        <option value="3">Master's or PhD</option>
                    </select> */}
                <DropdownButton
                  title={highestEd}
                  onSelect={function (evt) {
                    setEd(evt);
                  }}
                  onChange={(e) => handleEdChange(e)}
                >
                  <Dropdown.Item eventKey="High School">
                    High School
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Undergraduate">
                    Undergraduate
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Masters/PhD">
                    Master's or PhD
                  </Dropdown.Item>
                </DropdownButton>
              </Form.Group>
              <Form.Group controlId="workExperience">
                <Form.Label>Number of years of work experience?</Form.Label>

                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="defaultUnchecked"
                  />
                  <label class="custom-control-label" for="defaultUnchecked">
                    Student
                  </label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="defaultUnchecked2"
                  />
                  <label class="custom-control-label" for="defaultUnchecked">
                    1-5 years
                  </label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="defaultUnchecked3"
                  />
                  <label class="custom-control-label" for="defaultUnchecked">
                    4-6 years
                  </label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="defaultUnchecked4"
                  />
                  <label class="custom-control-label" for="defaultUnchecked">
                    6-10 years
                  </label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="defaultUnchecked5"
                  />
                  <label class="custom-control-label" for="defaultUnchecked">
                    10+ years
                  </label>
                </div>
              </Form.Group>

              <Form.Group controlId="position">
                <Form.Label>
                  Please select what best describes your position
                </Form.Label>

                <DropdownButton
                  title={position}
                  onSelect={function (evt) {
                    setPos(evt);
                  }}
                  onChange={(e) => handleEdChange(e)}
                >
                  <Dropdown.Item eventKey="High School">
                    High School
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Undergraduate">
                    Undergraduate
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Masters/PhD">
                    Master's or PhD
                  </Dropdown.Item>
                </DropdownButton>
              </Form.Group>

              <Form.Group controlId="sector">
                <Form.Label>What sector is your startup in?</Form.Label>

                <DropdownButton
                  title={sector}
                  onSelect={function (evt) {
                    setSector(evt);
                  }}
                  onChange={(e) => handleEdChange(e)}
                >
                  <Dropdown.Item eventKey="Consumer">Consumer</Dropdown.Item>
                  <Dropdown.Item eventKey="Enterprise">
                    Enterprise
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Emerging Tech">
                    Emerging Tech
                  </Dropdown.Item>
                </DropdownButton>
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>
                  Please provide 1 sentence describing your startup.
                </Form.Label>
                <Form.Control
                  type="description"
                  placeholder="Describe your startup"
                />
              </Form.Group>

              <Form.Group controlId="expertise">
                <Form.Label>What is your area of expertise?</Form.Label>
                <DropdownButton
                  title={expertise}
                  onSelect={function (evt) {
                    setExpertise(evt);
                  }}
                >
                  <Dropdown.Item eventKey="Engineering">
                    Engineering
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Brand and Strategy">
                    Brand and Strategy
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="People and Culture">
                    People and Culture
                  </Dropdown.Item>
                </DropdownButton>
              </Form.Group>
              <Form.Group controlId="similarity">
                <Form.Label>
                  Do you want to connect with people who are similar to you?
                </Form.Label>
                <Form.Check inline label="1" type="checkbox" id={`inline-1`} />
                <Form.Check inline label="2" type="checkbox" id={`inline-2`} />
                <Form.Check
                  inline
                  label="3"
                  type={"checkbox"}
                  id={`inline-3`}
                />
                <Form.Check inline label="4" type="checkbox" id={`inline-4`} />
                <Form.Check inline label="5" type="checkbox" id={`inline-5`} />
              </Form.Group>

              <Form.Group controlId="similarity">
                <Form.Label>
                  Do you want to connect with people who are similar to you?
                </Form.Label>
                <Form.Check inline label="1" type="checkbox" id={`inline-1`} />
                <Form.Check inline label="2" type="checkbox" id={`inline-2`} />
                <Form.Check
                  inline
                  label="3"
                  type={"checkbox"}
                  id={`inline-3`}
                />
                <Form.Check inline label="4" type="checkbox" id={`inline-4`} />
                <Form.Check inline label="5" type="checkbox" id={`inline-5`} />
              </Form.Group>

              <Form.Group controlId="matchFormat">
                <Form.Label>How do you want to be matched?</Form.Label>
                <DropdownButton
                  title={matchFormat}
                  onSelect={function (evt) {
                    setMatchFormat(evt);
                  }}
                >
                  <Dropdown.Item eventKey="Pacific">Pacific</Dropdown.Item>
                  <Dropdown.Item eventKey="Mountain">Mountain</Dropdown.Item>
                  <Dropdown.Item eventKey="Central">Central</Dropdown.Item>
                  <Dropdown.Item eventKey="Eastern">Eastern</Dropdown.Item>
                  <Dropdown.Item eventKey="International">
                    Eastern
                  </Dropdown.Item>
                </DropdownButton>
              </Form.Group>
              <Form.Group controlId="startupStage">
                <Form.Label>Are you working on a Startup?</Form.Label>
                <DropdownButton
                  title={startupStage}
                  onSelect={function (evt) {
                    setStartupStage(evt);
                  }}
                >
                  <Dropdown.Item eventKey="Ideation/Early">
                    Ideation/Early
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Middle">Middle</Dropdown.Item>
                  <Dropdown.Item eventKey="Late">Late</Dropdown.Item>
                </DropdownButton>
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
