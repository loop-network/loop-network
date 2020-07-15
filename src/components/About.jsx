import React from "react";

function About() {
  return (
    <div className="about">
      <div class="row first py-4 px-4 mb-4">
        <div class="container my-auto">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <h1>Our Team</h1>
              <p>
                The Loop was founded in 2020 by Sri Muppidi. We are a team of nine women dedicated to supporting female founders and entrepreneurs. 
              </p>
            </div>
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="illustrations/remote_team.svg"
                alt="Team"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row py-4 px-4 my-4">
        <div class="container my-auto">
          <h2 class="mb-4">Our Founder</h2>
          <div class="card-deck">
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
                <img src="/profiles/Sri.png" class="card-img-top" alt="Sri Muppidi" />
                <div class="card-body">
                  <h5 class="card-title">Sri Muppidi</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row py-4 px-4 my-4">
        <div class="container my-auto">
          <h2 class="mb-4">Marketing Team</h2>
          <div class="card-deck">
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
              <img src="/profiles/Julie.jpg" class="card-img-top" alt="Julie Wang" />
                <div class="card-body">
                  <h5 class="card-title">Julie Wang</h5>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
              <img src="/profiles/Iris.png" class="card-img-top" alt="Iris Zhou" />
                <div class="card-body">
                  <h5 class="card-title">Iris Zhou</h5>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
              <img src="/profiles/Michelle.jpg" class="card-img-top" alt="Michelle Fang" />
                <div class="card-body">
                  <h5 class="card-title">Michelle Fang</h5>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
              <img src="/profiles/Fernanda.png" class="card-img-top" alt="Fernanda Lopez" />
                <div class="card-body">
                  <h5 class="card-title">Fernanda Lopez</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row py-4 px-4 my-4">
        <div class="container my-auto">
          <h2 class="mb-4">Product Team</h2>
          <div class="card-deck">
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
              <img src="/profiles/Annie.JPG" class="card-img-top" alt="Annie Lu" />
                <div class="card-body">
                  <h5 class="card-title">Annie Lu</h5>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
              <img src="/profiles/Sophia.jpg" class="card-img-top" alt="Sophia Ye" />
                <div class="card-body">
                  <h5 class="card-title">Sophia Ye</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row py-4 px-4 my-4">
        <div class="container my-auto">
          <h2 class="mb-4">Community Team</h2>
          <div class="card-deck">
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
              <img src="/profiles/Sara.jpg" class="card-img-top" alt="Sara Dakin" />
                <div class="card-body">
                  <h5 class="card-title">Sara Dakin</h5>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
              <img src="/profiles/Aina.jpg" class="card-img-top" alt="Aina Khan" />
                <div class="card-body">
                  <h5 class="card-title">Aina Khan</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default About;