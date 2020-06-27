import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="row first blue-background py-4 px-4 mb-4">
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
                src="images/women_day.svg"
                alt="Women Empowered"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row min-vh-100 py-4 px-4 my-4">
        <div class="container my-auto">
          <div class="row align-items-center">
            <div class="col-lg-6">
            <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="images/investment_data.svg"
                alt="Women Investment"
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
      <div class="row min-vh-100 py-4 px-4 my-4">
        <div class="container my-auto">
          <h5 class="mb-4">How you can be a part of The Loop</h5>
          <div class="card-deck">
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
                <div class="card mb-4 h-100">
                  <img src="images/friends_online_card_image.svg" class="card-img-top" alt="Community Card" />
                  <div class="card-body">
                    <h6 class="card-title">Join the Community</h6>
                    <p class="card-text">Connect with other founders and share advice and resources.</p>
                    <a href="/Matching" class="btn btn-primary">Join Now</a>
                  </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
                <div class="card mb-4 h-100">
                  <img src="images/hang_out_card_image.svg" class="card-img-top" alt="Group Salons Card" />
                  <div class="card-body">
                    <h6 class="card-title">Join a Group Salon</h6>
                    <p class="card-text">Learn and connect with other founders in salons led by industry experts.</p>
                    <a href="/Groups" class="btn btn-primary">Join Waitlist</a>
                  </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
                <img src="images/teacher_card_image.svg" class="card-img-top" alt="Volunteer Card" />
                <div class="card-body">
                  <h6 class="card-title">Become a Volunteer</h6>
                  <p class="card-text">Teach and support the next generation of female founders.</p>
                  <a href="/Volunteer" class="btn btn-primary">Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row min-vh-100 py-4 px-4 my-4">
        <div class="container my-auto">
          <h5></h5>
          <div class="card-deck">
            <div class="col-md-6 col-lg-6 col-12 d-flex align-items-stretch">
                <div class="card mb-4">
                <div class="card-body yellow-background">
                  <p class="card-text">"I absolutely love this platform and engage with it every day! Changed my life. Here are more words of praise and this is a long testimonial. I love The Loop Network and I recommend all women founders join!"</p>
                </div>
                <div class="card-body">
                  <div class="row speaker">
                    <div class="col-md-3 col-lg-3 col-3 d-flex align-items-stretch">
                      <div class="avatar mx-auto">
                        <img src="images/example_headshot.jpg" class="rounded-circle z-depth-1 img-fluid" />
                      </div>
                    </div>
                    <div class="col-md-9 col-lg-9 col-9">
                      <p class="card-title"><b>Melinda Gates</b></p>
                      <p class="card-subtitle mb-2 text-muted">Co-founder of the Gates Foundation</p>
                    </div>
                </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-12 d-flex align-items-stretch">
              <div class="card mb-4">
                <div class="card-body yellow-background">
                  <p class="card-text">"I absolutely love this platform and engage with it every day! Changed my life. This is a shorter testimonial."</p>
                </div>
                <div class="card-body">
                  <div class="row speaker">
                    <div class="col-md-3 col-lg-3 col-3 d-flex align-items-stretch">
                      <div class="avatar mx-auto">
                        <img src="images/example_headshot.jpg" class="rounded-circle z-depth-1 img-fluid" />
                      </div>
                    </div>
                    <div class="col-md-9 col-lg-9 col-9">
                      <p class="card-title"><b>Melinda Gates</b></p>
                      <p class="card-subtitle mb-2 text-muted">Co-founder of the Gates Foundation</p>
                    </div>
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

export default Home;