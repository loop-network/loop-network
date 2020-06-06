import React from "react";

function Matching() {
  return (
    <div className="matching">
      <section class="first-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <h1>One-on-Ones</h1>
              <p>
                More in-depth description of One-on--Ones and the purpose of these meetings - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <button type="button" class="btn btn-primary">Sign up</button>
            </div>
            <div class="col-lg-6">
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
        <div class="container">
          <h3>How It Works</h3>
          <div class="row align-items-center">
            <div class="col-lg-4">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/300x300"
                alt=""
              />
              <p>Sign up here. Please answer all the questions so we can match you.</p>
            </div>
            <div class="col-lg-4">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/300x300"
                alt=""
              />
              <p>The Loop finds you the best matches. We’ll take care of all the logistics.</p>
            </div>
            <div class="col-lg-4">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/300x300"
                alt=""
              />
              <p>Meet with your match or cohort group virtually (or in-person after COVID-19). </p>
            </div>
          </div>
        </div>
      </section>
      <section class="blue-background">
        <div class="container">
          <h1>“I met one of my technical co-founders of my startup through a one-on-one set up by The Loop!” - Jan Smith</h1>
        </div>
      </section>
    </div>
  );
}

export default Matching;