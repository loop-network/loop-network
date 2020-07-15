import React from "react";

function Community() {
  return (
    <div className="community">
      <div class = "row first py-4 px-4 mb-4">
        <div class="container my-auto">
          <div class="row align-items-center">
          <div class="col-lg-6 mb-4">
              <h1>Our Community</h1>
              <p>
                Find other women founders to connect, collaborate, and expand your personal network within The Loop community. 
              </p>
            </div>
            <div class="col-lg-6">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="illustrations/community-header.svg"
                alt="Community"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row min-vh-100 py-4 px-4 my-4">
        <div class="container my-auto">
          <div class="card-deck">
            <div class="col-md-6 col-lg-6 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
                <img src="illustrations/slack_chat.svg" class="card-img-top larger-card" alt="One on Ones Card" />
                <div class="card-body">
                  <h5 class="card-title">Our Slack Workspace</h5>
                  <p class="card-text">Join the Slack community to be a part of the conversation.</p>
                  <a href="/Matching" class="btn btn-cta">Join Now</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
                <img src="illustrations/women_directory.svg" class="card-img-top larger-card" alt="Group Salons Card" />
                <div class="card-body">
                  <h5 class="card-title">Our Directory of Womxn</h5>
                  <p class="card-text">Access the Directory to reach out directly to other interesting womxn.</p>
                  <a href="/Groups" class="btn btn-cta">Access Directory</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row min-vh-100 py-4 px-4 my-4">
        <div class="container my-auto">
          <h2 class="mb-4">Connect with other female founders</h2>
          <div class="card-deck">
            <div class="col-md-6 col-lg-6 col-12 d-flex align-items-stretch">
              <div class="card mb-4">
                <div class="card-body yellow-background">
                  <p class="card-text">"I'm starting a company called Nuuri, a nutrition telehealth platform! I'm also a co-leader of a nonprofit political coalition called Free The Period CA, dedicated to menstrual health. Recently I won the Reducing Carbon "Food" print challenge of FoodTechies Finland's Feeding the Future Hackathon with a pitch I created in 48 hours, winning 2500 EUR and an opportunity to compete in a pilot program!"</p>
                </div>
                <div class="card-body">
                  <div class="row speaker">
                    <div class="col-md-3 col-lg-3 col-3 d-flex align-items-stretch">
                      <div class="avatar mx-auto">
                        <img src="images/Rachael_Deng.png" class="rounded-circle z-depth-1 img-fluid" />
                      </div>
                    </div>
                    <div class="col-md-9 col-lg-9 col-9">
                      <p class="card-title"><b>Rachael Deng</b></p>
                      <p class="card-subtitle mb-2 text-muted">Co-founder of PERIOD@Berkeley</p>
                    </div>
                </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-12 d-flex align-items-stretch">
              <div class="card mb-4">
                <div class="card-body yellow-background">
                  <p class="card-text">"I founded a non-profit organization called SavingTakeouts to provide small businesses owners the technological resources and knowledge to compete with more modern establishments in these trying times. Over 100k small businesses have closed since the pandemic. This isn't just an issue caused by COVID-19; restaurants that have been in business for decades have continuously been displaced by gentrification. These mom and pop shops are valuable; we just need people to start recognizing them."</p>
                </div>
                <div class="card-body">
                  <div class="row speaker">
                    <div class="col-md-3 col-lg-3 col-3 d-flex align-items-stretch">
                      <div class="avatar mx-auto">
                        <img src="images/Joyce_Chan.png" class="rounded-circle z-depth-1 img-fluid" />
                      </div>
                    </div>
                    <div class="col-md-9 col-lg-9 col-9">
                      <p class="card-title"><b>Joyce Chan</b></p>
                      <p class="card-subtitle mb-2 text-muted">Founder of Saving Takeouts</p>
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

export default Community;