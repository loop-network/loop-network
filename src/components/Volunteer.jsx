import React from "react";

function Volunteer() {
  return (
    <div className="volunteer">
      <div class="row first py-4 px-4 mb-4">
        <div class="container my-auto">
          <div class="row align-items-center my-5">
          <div class="col-lg-6 mb-4">
              <h1>Volunteer</h1>
              <p>
              Want to help? We’re looking for mentors.
              </p>
              <a href="https://airtable.com/shr7icN2JGuwmRz9u"><button type="button" class="btn btn-primary">Sign up</button></a>
              <a href="https://docs.google.com/document/d/1YH27NePc-BfpFGou4LGAajfDN4PEnioU3ctI5aGr5wc/edit"><button type="button" class="btn btn-outline-primary ml-2">Check out our Mentor Guide</button></a>
            </div>
            <div class="col-lg-6">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="illustrations/teacher_large.svg"
                alt="Volunteer"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row min-vh-100 py-4 px-4 my-4">
        <div class="container my-auto">
          <h2>How it works</h2>
          <p>Group Salons will launch June 29th. Sessions are one hour per week for a month. We need an outstanding group of mentors to coach current and future founders who hope to develop, launch, and scale their startups.</p>
          <div class="row">
            <div class="col-md-6 col-lg-4 col-12 mb-4">
              <h5>Who is this for?</h5>
              <img
                class="img-fluid rounded mb-4 mb-lg-2"
                src="illustrations/things_to_say.svg"
                alt="Female professional"
              />
              <p>We are looking for investors, operators, and founders across all experience levels, from executives to analysts. No prior mentorship experience needed.</p>
            </div>
            <div class="col-md-6 col-lg-4 col-12 mb-4">
              <h5>What’s the commitment?</h5>
              <img
                class="img-fluid rounded mb-4 mb-lg-2"
                src="illustrations/time_management.svg"
                alt="Time commitment"
              />
              <p>An hour per week for a month. That’s just 4 hours.</p>
            </div>
            <div class="col-md-6 col-lg-4 col-12 mb-4">
              <h5>What do I do?</h5>
              <img
                class="img-fluid rounded mb-4 mb-lg-2"
                src="illustrations/conference_call.svg"
                alt="Check in"
              />
              <p>Your job is to check in with a small cohort of founders and facilitate a conversation on that week’s topic. We take care of the programming and content.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row min-vh-100 py-4 px-4 my-4">
        <div class="container my-auto">
          <h2>Our current team of mentors</h2>
          <div class="row align-items-center my-5">
            <div class="col-lg-3">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="images/Dana Kim.jpeg"
                alt="Dana Kim"
              />
            </div>
            <div class="col-lg-9 mb-4">
              <h5>Dana Kim</h5>
              <p>
              Dana Kim is the founder of Showcase Insights and has former experience as an Investment Fellow at Amplifyher Ventures, Associate Director of Qualitative Research and Strategy at Kelton Global, and Wings Team Member at Red Bull. 
              She is currently pursuing her MBA at the prestigious Wharton School and has an extensive background in market research (which gave her the idea for Showcase)!
              </p>
            </div>
          </div>
          <div class="row align-items-center my-5">
            <div class="col-lg-3">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="images/Sydney Fulkerson.png"
                alt="Sydney Fulkerson"
              />
            </div>
            <div class="col-lg-9 mb-4">
              <h5>Sydney Fulkerson</h5>
              <p>
              Sydney Fulkerson is the founder of Bebas, LLC, a brand design and strategy firm. She is a published author of “The Coffee Run- And Other Internship Need-to-Knows,” a book dedicated to new interns navigating a professional space. 
              Sydney has 13+ years of experience in design and brand strategy. Her prior experiences include working in brand strategy at Goodby Silverstein & Partners and in marketing/design at SPLITS59. 
              </p>
            </div>
          </div>
          <div class="row align-items-center my-5">
            <div class="col-lg-3">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="profiles/Sri.png"
                alt="Sri Muppidi"
              />
            </div>
            <div class="col-lg-9 mb-4">
              <h5>Sri Muppidi</h5>
              <p>
              Sri Muppidi is the founder of The Loop Network and currently works as an investor at Sierra Ventures. Previously, she's worked on her own startup and worked at The Economist, World Bank, Federal Reserve, and State Department!
              She has her BA and MS from Stanford University and has vast experience and interest in startups, venture capital, journalism, and creative writing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row min-vh-100 blue-background py-4 px-4 my-4">
        <div class="container my-auto">
        <div class="row align-items-center my-5">
          <div class="col-lg-6">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="illustrations/key_points.svg"
              alt="Teaching"
            />
          </div>
          <div class="col-lg-6 mb-4">
            <h2>Ready to sign up? Help the next generation of female founders.</h2>
            <a href="https://airtable.com/shr7icN2JGuwmRz9u"><button type="button" class="btn btn-primary">Sign up now</button></a>
            <a href="https://docs.google.com/document/d/1YH27NePc-BfpFGou4LGAajfDN4PEnioU3ctI5aGr5wc/edit"><button type="button" class="btn btn-outline-primary ml-2">Check out our Mentor Guide</button></a>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  );
}

export default Volunteer;