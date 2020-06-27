import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="row min-vh-100 blue-background py-4 px-4">
        <div class="container my-auto">
          <div class="row align-items-center">
            <div class="col-lg-6 mb-4">
              <h1>Breaking the glass ceiling, together.</h1>
              <p>
              The Loop is a community for current and future female founders. We make personalized introductions for one-on-ones and group salons.
              </p>
              <button type="button" class="btn btn-primary">Join The Loop</button>
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
      </div>
      <div class="row min-vh-100 py-4 px-4">
        <div class="container my-auto">
          <div class="row align-items-center">
            <div class="col-lg-6">
            <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div class="col-lg-6">
              <h2>Last year, female founders received only 2.8% of venture funding. We plan to change that.</h2>
              <p>
              More in-depth description of mission - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row min-vh-100 py-4 px-4">
        <div class="container my-auto">
          <h5>How you can be a part of The Loop</h5>
          <div class="row">
            <div class="col-md-6 col-lg-4 col-12">
              <div class="card-deck">
                <div class="card mb-4">
                  <img src="http://placehold.it/500x300" class="card-img-top" alt="One on Ones Card" />
                  <div class="card-body">
                    <h6 class="card-title">Join the Community</h6>
                    <p class="card-text">Connect with other founders and share advice and resources.</p>
                    <a href="/Matching" class="btn btn-primary">Join Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-12">
              <div class="card mb-4">
                <img src="http://placehold.it/500x300" class="card-img-top" alt="Group Salons Card" />
                <div class="card-body">
                  <h6 class="card-title">Join a Group Salon</h6>
                  <p class="card-text">Learn and connect with other founders in salons led by industry experts.</p>
                  <a href="/Groups" class="btn btn-primary">Join Waitlist</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-12">
              <div class="card mb-4">
                <img src="http://placehold.it/500x300" class="card-img-top" alt="Group Salons Card" />
                <div class="card-body">
                  <h6 class="card-title">Become a Volunteer</h6>
                  <p class="card-text">Teach and support the next generation of female founders.</p>
                  <a href="/Groups" class="btn btn-primary">Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row min-vh-100 blue-background py-4 px-4">
        <div class="container my-auto">
          <h2>“I met one of my technical co-founders of my startup through a one-on-one set up by The Loop!” - Jan Smith</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;