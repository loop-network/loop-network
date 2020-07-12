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
                src="images/remote_team.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row py-4 px-4 my-4">
        <div class="container my-auto">
          <h4 class="mb-4">Our Founder</h4>
          <div class="card-deck">
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
                <img src="/profiles/Sri.png" class="card-img-top" alt="Sri Muppidi" />
                <div class="card-body">
                  <h6 class="card-title">Sri Muppidi</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row py-4 px-4 my-4">
        <div class="container my-auto">
          <h4 class="mb-4">Marketing Team</h4>
          <div class="card-deck">
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
              <img src="/profiles/Julie.jpg" class="card-img-top" alt="Julie Wang" />
                <div class="card-body">
                  <h6 class="card-title">Julie Wang</h6>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
              <img src="/profiles/Iris.png" class="card-img-top" alt="Iris Zhou" />
                <div class="card-body">
                  <h6 class="card-title">Iris Zhou</h6>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
              <img src="/profiles/Michelle.jpg" class="card-img-top" alt="Michelle Fang" />
                <div class="card-body">
                  <h6 class="card-title">Michelle Fang</h6>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
              <img src="/profiles/Fernanda.png" class="card-img-top" alt="Fernanda Lopez" />
                <div class="card-body">
                  <h6 class="card-title">Fernanda Lopez</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row py-4 px-4 my-4">
        <div class="container my-auto">
          <h4 class="mb-4">Product Team</h4>
          <div class="card-deck">
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
              <img src="/profiles/Annie.JPG" class="card-img-top" alt="Annie Lu" />
                <div class="card-body">
                  <h6 class="card-title">Annie Lu</h6>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
              <img src="/profiles/Sophia.jpg" class="card-img-top" alt="Sophia Ye" />
                <div class="card-body">
                  <h6 class="card-title">Sophia Ye</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row py-4 px-4 my-4">
        <div class="container my-auto">
          <h4 class="mb-4">Community Team</h4>
          <div class="card-deck">
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
              <img src="/profiles/Sara.jpg" class="card-img-top" alt="Sara Dakin" />
                <div class="card-body">
                  <h6 class="card-title">Sara Dakin</h6>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
              <img src="/profiles/Aina.jpg" class="card-img-top" alt="Aina Khan" />
                <div class="card-body">
                  <h6 class="card-title">Aina Khan</h6>
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