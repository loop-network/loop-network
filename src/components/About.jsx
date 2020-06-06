import React from "react";

function About() {
  return (
    <div className="about">
      <section class="first-section">
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
        <div class="container">
          <div class="card-deck">
            <div class="row row-cols-3 row-cols-md-3">
              <div class="col mb-3">
                <div class="card">
                  <img src="http://placehold.it/500x300" class="card-img-top" alt="One on Ones Card" />
                  <div class="card-body">
                    <h5 class="card-title">Sri Muppidi</h5>
                  </div>
                </div>
              </div>
              <div class="col mb-3">
                <div class="card">
                  <img src="http://placehold.it/500x300" class="card-img-top" alt="Group Salons Card" />
                  <div class="card-body">
                    <h5 class="card-title">Name</h5>
                  </div>
                </div>
              </div>
              <div class="col mb-3">
                <div class="card">
                  <img src="http://placehold.it/500x300" class="card-img-top" alt="Group Salons Card" />
                  <div class="card-body">
                    <h5 class="card-title">Name</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;