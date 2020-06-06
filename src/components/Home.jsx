import React from "react";

function Home() {
  return (
    <div className="home">
      <section class="first-section blue-background">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
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
      </section>
      <section>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
            <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div class="col-lg-6">
              <h1>Last year, female founders received only 2.8% of venture funding. We plan to change that.</h1>
              <p>
              More in-depth description of mission - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="card-group">
            <div class="card">
              <img src="http://placehold.it/500x300" class="card-img-top" alt="One on Ones Card" />
              <div class="card-body">
                <h5 class="card-title">One-on-Ones</h5>
                <p class="card-text">Sign up and get matched with another female founder.</p>
                <a href="/Matching" class="btn btn-primary">Sign up</a>
              </div>
            </div>
            <div class="card">
              <img src="http://placehold.it/500x300" class="card-img-top" alt="Group Salons Card" />
              <div class="card-body">
                <h5 class="card-title">Group Salons</h5>
                <p class="card-text">Learn and connect with other founders in salons led by industry experts.</p>
                <a href="/Groups" class="btn btn-primary">Join Waitlist</a>
              </div>
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

export default Home;