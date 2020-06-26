import React from "react";

function About() {
  return (
    <div className="about">
      <section class = "first-section">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1>Our Team</h1>
            <p>
              More in-depth description of our team - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
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
      <section>
        <div class = "container">
          <div class = "card-group">
            <div class="card">
                <img src="http://placehold.it/500x300" class="card-img-top" alt="One on Ones Card" />
                <div class="card-body">
                  <h5 class="card-title">One-on-Ones</h5>
                  <p class="card-text">Sign up and get matched with another female founder.</p>
                  <a href="/Matching" class="btn btn-cta">Sign up</a>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default About;