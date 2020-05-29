import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-6">
            <h1>Breaking the glass ceiling, together.</h1>
            <p>
            The Loop is a community for current and future female founders. We make personalized introductions for one-on-ones and group salons.
            </p>
            <button type="button" class="btn btn-cta">Join The Loop</button>
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
  );
}

export default Home;