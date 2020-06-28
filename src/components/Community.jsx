import React from "react";

function Community() {
  return (
    <div className="community">
      <div class = "row first py-4 px-4 mb-4">
        <div class="container my-auto">
          <div class="row align-items-center">
          <div class="col-lg-5 mb-4">
              <h1>Our Community</h1>
              <p>
                Find other women founders to connect and collaborate.  
              </p>
            </div>
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="images/community-header.svg"
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
                <img src="images/slack_chat.svg" class="card-img-top larger-card" alt="One on Ones Card" />
                <div class="card-body">
                  <h5 class="card-title">Our Slack Workspace</h5>
                  <p class="card-text">Join the Slack community to be a part of the conversation.</p>
                  <a href="/Matching" class="btn btn-cta">Join Now</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-12 align-items-stretch mb-4">
              <div class="card mb-4 h-100">
                <img src="images/women_directory.svg" class="card-img-top larger-card" alt="Group Salons Card" />
                <div class="card-body">
                  <h5 class="card-title">Our Directory of Womxn</h5>
                  <p class="card-text">Access the Directory to reach out directly to other interesting womxn.</p>
                  <a href="/Groups" class="btn btn-cta">Go to Directory</a>
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

export default Community;