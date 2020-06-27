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
                More in-depth description of our team - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
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
      <section>
        <div class="container">
          <div class="card-deck">
            <h1>Our Founder</h1>
            <div class="row row-cols-3 row-cols-md-3">
              <div class="col mb-3">
                <div class="card">
                  <img src="/profiles/Sri.png" class="card-img-top" alt="One on Ones Card" />
                  <div class="card-body">
                    <h5 class="card-title">Sri Muppidi</h5>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
         
      
          <div class="card-deck my-5">
            <h1>Marketing Team</h1>
            <div class="row row-cols-3 row-cols-md-3">

            <div class="col mb-3">
                  <div class="card">
                    <img src="/profiles/Julie.jpg" class="card-img-top" alt="Group Salons Card" />
                    <div class="card-body">
                      <h5 class="card-title">Julie</h5>
                    </div>
                  </div>
                </div>
                <div class="col mb-3">
                  <div class="card">
                    <img src="/profiles/Iris.png" class="card-img-top" alt="Group Salons Card" />
                    <div class="card-body">
                      <h5 class="card-title">Iris</h5>
                    </div>
                  </div>
                </div>
              <div class="col mb-3">
                <div class="card">
                  <img src="/profiles/Michelle.jpg" class="card-img-top" alt="One on Ones Card" />
                  <div class="card-body">
                    <h5 class="card-title">Michelle</h5>
                  </div>
                </div>
              </div>
                <div class="col mb-3">
                <div class="card">
                  <img src="/profiles/Fernanda.png" class="card-img-top" alt="Group Salons Card" />
                  <div class="card-body">
                    <h5 class="card-title">Fernanda</h5>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
            <div class="container my-auto">
              <div class="card-deck my-5">
                <h1>Product Team</h1>
                <div class="row row-cols-3 row-cols-md-3">
              <div class="col mb-3">
                <div class="card">
                  <img src="/profiles/Annie.JPG" class="card-img-top" alt="Group Salons Card" />
                  <div class="card-body">
                    <h5 class="card-title">Annie</h5>
                  </div>
                </div>
              </div>
              <div class="col mb-3">
                <div class="card">
                  <img src="/profiles/Sophia.jpg" class="card-img-top" alt="Group Salons Card" />
                  <div class="card-body">
                    <h5 class="card-title">Sophia</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container my-auto">
          <div class="card-deck-my-5">
            <h1>Community Team</h1>
              <div class="row row-cols-3 row-cols-md-3">
                <div class="col mb-3">
                  <div class="card">
                    <img src="/profiles/Sara.jpg" class="card-img-top" alt="One on Ones Card" />
                    <div class="card-body">
                      <h5 class="card-title">Sara</h5>
                    </div>
                  </div>
                </div>
                <div class="col mb-3">
                  <div class="card">
                    <img src="/profiles/Aina.jpg" class="card-img-top" alt="Group Salons Card" />
                    <div class="card-body">
                      <h5 class="card-title">Aina</h5>
                    </div>
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