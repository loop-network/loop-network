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
      {/* <div class="row min-vh-100 py-4 px-4 my-4 mt-0"></div> */}
        <div class="container my-auto">
          <div class="card-group">
            <div class="card">
              <img src="images/slack_chat.svg" class="card-img-top" alt="One on Ones Card" />
              <div class="card-body">
                <h5 class="card-title">Our Slack Workspace</h5>
                <p class="card-text">Join the Slack community to be a part of the conversation</p>
                <a href="/Matching" class="btn btn-cta">Join Now</a>
              </div>
            </div>
            <div class="card">
              <img src="images/women_directory.svg" class="card-img-top" alt="Group Salons Card" />
              <div class="card-body">
                <h5 class="card-title">Our Directory of Womxn</h5>
                <p class="card-text">Access the Directory to reach out directly to other interesting womxn.</p>
                <a href="/Groups" class="btn btn-cta">Go to Directory</a>
              </div>
            </div>
          </div>
        </div>
      
      <div class="row min-vh-100 blue-background py-4 px-4 my-4">
        <div class="container my-auto">
          <h1>“I met one of my technical co-founders of my startup through a one-on-one set up by The Loop!” - Jan Smith</h1>
        </div>
      </div>
    </div>
  );
}

export default Community;