import React from "react";

function Groups() {
  return (
    <div className="groups">
      <section class="first-section">
        <div class="container">
          <div class="row align-items-center my-5">
          <div class="col-lg-5">
              <h1>Group Salons</h1>
              <p>
                More in-depth description of Group Salons and the purpose of these meetings - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
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
      <div class="special-section">
        <div class="container">
        <nav class="nav">
          <a class="nav-link disabled" href="#"><h5>Upcoming Events</h5></a>
          <a class="nav-link" href="#"><h5>Past Events</h5></a>
        </nav>
          <div class="card-group">
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-2 yellow-background">
                  <div class="card-body text-center">
                    <h5>May 2</h5>
                    <h6>11:00am</h6>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Startups with Sri</h5>
                    <p class="card-text">This is a group salon with entrepreneur Sri Muppidi. We will be going over startup ideation and how to create an MVP. </p>
                    <p class="card-text">Location: Zoom<br />Host: Sri Muppidi</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="card-body">
                    <button class="btn btn-primary">Join Waitlist</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups;