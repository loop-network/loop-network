import React from "react";

function Volunteer() {
  return (
    <div className="volunteer">
      <div class="row first py-4 px-4 my-4">
        <div class="container my-auto">
          <div class="row align-items-center my-5">
          <div class="col-lg-5 mb-4">
              <h1>Volunteer</h1>
              <p>
              Want to help? We’re looking for mentors.
              </p>
              <button type="button" class="btn btn-primary">Sign up</button>
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
      <div class="row min-vh-100 py-4 px-4 my-4">
        <div class="container my-auto">
          <h5>How it Works</h5>
          <p>Group Salons will launch June 29th. Sessions are one hour per week for a month. We need an outstanding group of mentors to coach current and future founders who hope to develop, launch, and scale their startups.</p>
          <div class="row">
            <div class="col-md-6 col-lg-4 col-12 mb-4">
              <h6>Who is this for?</h6>
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/300x300"
                alt=""
              />
              <p>We are looking for investors, operators, and founders across all experience levels, from executives to analysts. No prior mentorship experience needed.</p>
            </div>
            <div class="col-md-6 col-lg-4 col-12 mb-4">
              <h6>What’s the commitment?</h6>
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/300x300"
                alt=""
              />
              <p>An hour per week for a month. That’s just 4 hours.</p>
            </div>
            <div class="col-md-6 col-lg-4 col-12 mb-4">
              <h6>What do I do?</h6>
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/300x300"
                alt=""
              />
              <p>Your job is to check in with a small cohort of founders and facilitate a conversation on that week’s topic. We take care of the programming and content.</p>
            </div>
          </div>
          <div class="row">
          <button type="button" class="btn btn-primary">Check out our Mentor Guide</button>
          </div>
        </div>
      </div>
      <div class="row min-vh-100 blue-background py-4 px-4 my-4">
        <div class="container my-auto">
        <h2>Ready to sign up? Help the next generation of female founders.</h2>
        <button type="button" class="btn btn-primary">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;