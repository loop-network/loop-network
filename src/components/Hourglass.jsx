import React from "react";

function Hourglass() {
  return (
    <div className="groups">
      <div class="row min-vh-75 py-4 px-4 mb-4">
        <div class="container my-auto">
          <div class="row align-items-center">
            <div class="col-lg-6 mb-4">
              <h1>HourGlass</h1>
              <p>
              Introducing HourGlass, a virtual hour-long pitch night inspired by Shark Tank featuring 2 female-led seed/Series A ventures presenting their ideas to a panel of VCs and angel investors. 
              </p>
              <a href="https://www.eventbrite.com/e/hourglass-a-pitch-night-tickets-131147733401"><button type="button" class="btn btn-primary">Register Here</button></a>
            </div>
            <div class="col-lg-6">
              {/* <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="illustrations/hang_out_large.svg"
                alt="Group Salons"
              /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div class="row min-vh-75 py-4 px-4 my-4">
        <div class="container my-auto">
          <h2>How it works</h2>
          <p>Sessions are one hour per week for a month. They’re led by an outstanding group of mentors who have prior experience as operators, investors, and founders. Group Salons are free, and mentors support founders on a volunteer-basis. Choose from three tracks:</p>
          <div class="row">
            <div class="col-md-6 col-lg-4 col-12 mb-4">
              <h5 class="blue-text">Develop your venture</h5>
              <img
                class="img-fluid rounded mb-4 mb-lg-2"
                src="illustrations/plans.svg"
                alt="Track 1"
              />
              <p><b>Ideate, Plan & Build</b><br /><br />Topics covered: problem discovery, market research, ideating, & user research.</p>
            </div>
            <div class="col-md-6 col-lg-4 col-12 mb-4">
              <h5 class="blue-text">Launch your startup</h5>
              <img
                class="img-fluid rounded mb-4 mb-lg-2"
                src="illustrations/maker_launch.svg"
                alt="Track 2"
              />
              <p><b>MVP, Sell, & Test</b><br /><br />Topics covered: design, prototyping, market experiments, & sales tests.</p>
            </div>
            <div class="col-md-6 col-lg-4 col-12 mb-4">
              <h5 class="blue-text">Scale your company</h5>
              <img
                class="img-fluid rounded mb-4 mb-lg-2"
                src="illustrations/progress_data.svg"
                alt="Track 3"
              />
              <p><b>Grow, Hire, & Fundraise</b><br /><br />Topics covered: hiring, fundraising, sales, & pricing.</p>
            </div>
          </div>
        </div>
      </div> */}
      <div class="row min-vh-75 py-4 px-4 my-4">
        <div class="container my-auto">
          <h2>Event Details</h2>
          <ol>
            <li><b>When and Where</b><br />December 10th, 3-4PM PT </li><br />
            <li><b>Our Panelists</b><br />Hannah Murdoch of Union Square Ventures, Kahini Shah of Gradient Ventures (Google’s early stage AI-focused venture fund), and Anant Akash of Soma Capital</li><br />
            <li><b>Want to watch?</b><br />Register <a href="https://www.eventbrite.com/e/hourglass-a-pitch-night-tickets-131147733401" target = "blank">here</a> and follow our <a href = "https://www.linkedin.com/company/42677886/admin/" target = "blank">
                LinkedIn 
            </a> and socials for more updates on the pitch teams and investors!</li><br />
            <li><b>Want to pitch?</b><br />Pitch teams must have at least one female co-founder and the max team size is 3. 
            You will be giving a 10 minute pitch, then engaging in a 6 minute Q&A with the panel, after which each panelist will say whether they are “in” or “out”. 
            This will be followed by a 4 minute laidback feedback/chat. 
            Not only will HourGlass be open to our network of over 300 aspiring female entrepreneurs and VCs (primarily college students), it will also put you in the same Zoom room as our panel of investors from high profile VC firms. 
            Please fill out this form and we will reach out to you!
</li><br />
            <li><b>Want to be one of our panelists?</b><br />Since no actual investments will be pledged, panelists will hypothetically appraise each pitch during the Q&A period and then provide more intimate feedback afterward. 
            Commitment is 1 hour. Fill out this <a href = "https://airtable.com/shrB8kPFdhPxlzf6J" target = "blank">form</a> and we will reach out to you! 

 </li><br />
            <li><b>Who do I contact if I have questions?</b><br />For more information, reach out to athena_feng@brown.edu </li>
          </ol>
        </div>
      </div>
    

    </div>
  );
}

export default Hourglass;