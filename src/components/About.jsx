import React from "react";
import { SocialIcon } from 'react-social-icons';

import { Flippy, FrontSide, BackSide } from 'react-flippy';
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
              {/* <div class="card mb-4 h-100">
                <img src="/profiles/Sri.png" class="card-img-top" alt="Sri Muppidi" />
                <div class="card-body">
                  <h5 class="card-title">Sri Muppidi</h5>
                </div>
              </div> */}
              <Flippy
                    flipOnClick={true} // default false
                    flipDirection="horizontal"
                >
                <FrontSide 
                >
                      <img src="/profiles/Sri.png" class="card-img-top" alt="Sri Muppidi" />
                        <div class="card-body">
                          <h5 class="card-title">Sri Muppidi</h5>
                        </div>    
                </FrontSide>
                <BackSide
                    >
                    <div class="card-body">
                          <p class="card-text">
                          Sri founded The Loop Network and is an investor at Sierra Ventures. 
                          Previously, she’s worked on her own startup, and at The Economist, The World Bank, Federal Reserve, and State Department.
                          She holds a BA in Economics and an MS in Management Science and Engineering from Stanford University.
                          </p>
                          <SocialIcon url = "https://www.linkedin.com/in/sri-muppidi/" target="_blank" style={{ height: 25, width: 25 }}/>
                    </div>
                </BackSide>
              </Flippy>
            </div>
          </div>
        </div>
      </div>

      <div class="row py-4 px-4 my-4">
        <div class="container my-auto">
          <h2 class="mb-4">Marketing Team</h2>
          <div class="card-deck">
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <Flippy
                    flipOnClick={true} // default false
                    flipDirection="horizontal"
                >
                <FrontSide 
                >
                      <img src="/profiles/Julie.jpg" class="card-img-top" alt="Julie Wang" />
                        <div class="card-body">
                          <h5 class="card-title">Julie Wang</h5>
                        </div>    
                </FrontSide>
                <BackSide
                    >
                    <div class="card-body">
                          <p class="card-text">
                          Julie is a business student at Washington University in St. Louis with a background in visual art and passionate about the intersection between business strategy and design. 
                          She’s working for a tech + design agency in Baltimore and has supported digital marketing campaigns 
                          for a socially conscious jewelry company.
                          </p>
                          <SocialIcon url = "https://www.linkedin.com/in/jhswang/" target="_blank" style={{ height: 25, width: 25 }}/>
                    </div>
                </BackSide>
              </Flippy>
            </div>
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <Flippy
                    flipOnClick={true} // default false
                    flipDirection="horizontal"
                >
                <FrontSide 
                >
                      <img src="/profiles/Iris.png" class="card-img-top" alt="Iris Zhou" />
                        <div class="card-body">
                          <h5 class="card-title">Iris Zhou</h5>
                        </div>    
                </FrontSide>
                <BackSide
                    >
                    <div class="card-body">
                          <p class="card-text">
                          Iris is a Seattle native who is studying Economics at the University of Pennsylvania and loves connecting with passionate and authentic womxn. She runs her magazine, Comeback Mag, along with branding and social media for small businesses ranging from international stylists to healthy snacks brands. 
                          </p>
                          <SocialIcon url = "https://www.linkedin.com/in/zhouiris/" target="_blank" style={{ height: 25, width: 25 }}/>
                    </div>
                </BackSide>
              </Flippy>
            </div>
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              {/* <div class="card mb-4 h-100">
              <img src="/profiles/Michelle.jpg" class="card-img-top" alt="Michelle Fang" />
                <div class="card-body">
                  <h5 class="card-title">Michelle Fang</h5>
                </div>
              </div> */}
              <Flippy
                    flipOnClick={true} // default false
                    flipDirection="horizontal"
                >
                <FrontSide 
                >
                      <img src="/profiles/Michelle.jpg" class="card-img-top" alt="Michelle Fang" />
                        <div class="card-body">
                          <h5 class="card-title">Michelle Fang</h5>
                        </div>    
                </FrontSide>
                <BackSide
                    >
                    <div class="card-body">
                          <p class="card-text">
                          Michelle is a Digital Strategy Consultant at IBM and passionate about leveraging Design Thinking to do good at the intersection of people and technology. 
                          An avid coffee lover, Michelle also founded a student-run Design Thinking 
                          consultancy in college and has digital marketing experience spanning several startups.

                          </p>
                          <SocialIcon url = "https://www.linkedin.com/in/michellesfang/" target="_blank" style={{ height: 25, width: 25 }}/>
                    </div>
                </BackSide>
              </Flippy>
            </div>
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <Flippy
                    flipOnClick={true} // default false
                    flipDirection="horizontal"
                >
                <FrontSide 
                >
                      <img src="/profiles/Fernanda.png" class="card-img-top" alt="Fernanda Lopez" />
                        <div class="card-body">
                          <h5 class="card-title">Fernanda Lopez</h5>
                        </div>    
                </FrontSide>
                <BackSide
                    >
                    <div class="card-body">
                          <p class="card-text">
                          Fernanda is a passionate leader focused on creating opportunities for female entrepreneurs. 
                          Growing up in Mexico, she realized the lack of leadership and support initiatives to empower womxn in her community and is now working to change that!
                          She's currently studying marketing at Northeastern University. 
                          </p>
                          <SocialIcon url = "https://www.linkedin.com/in/fernandaglopez/" target="_blank" style={{ height: 25, width: 25 }}/>
                    </div>
                </BackSide>
              </Flippy>
            </div>
          </div>
        </div>
      </div>

      <div class="row py-4 px-4 my-4">
        <div class="container my-auto">
          <h2 class="mb-4">Product Team</h2>
          <div class="card-deck">
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <Flippy
                    flipOnClick={true} // default false
                    flipDirection="horizontal"
                >
                <FrontSide 
                >
                      <img src="/profiles/Annie.JPG" class="card-img-top" alt="Annie Lu" />
                        <div class="card-body">
                          <h5 class="card-title">Annie Lu</h5>
                        </div>    
                </FrontSide>
                <BackSide
                    >
                    <div class="card-body">
                          <p class="card-text">
                          Annie is a software engineer currently studying Computer Science at Duke University. 
                          She's passionate about the diverse applications of technology in improving healthcare outcomes. 
                          She is constantly inspired by the incredible womxn she’s met through The Loop and all of her endeavours.
                          </p>
                          <SocialIcon url = "https://www.linkedin.com/in/annie--lu/" target="_blank" style={{ height: 25, width: 25 }}/>
                    </div>
                    
                    
                </BackSide>
              </Flippy>
            </div>
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <Flippy
                    flipOnClick={true} // default false
                    flipDirection="horizontal"
                >
                <FrontSide 
                >
                      <img src="/profiles/Sophia.jpg" class="card-img-top" alt="Sophia Ye" />
                        <div class="card-body">
                          <h5 class="card-title">Sophia Ye</h5>
                        </div>    
                </FrontSide>
                <BackSide
                    >
                    <div class="card-body">
                          <p class="card-text">
                          Sophia is an aspiring product designer from Philadelphia who is passionate about using technology to build and strengthen communities and relationships. She
                          graduated with a degree in Business Analytics from the University of Pennsylvania and currently works as a freelance UI/UX designer for tech startups.

                          </p>
                          <SocialIcon url = "https://www.linkedin.com/in/sophiaye/" target="_blank" style={{ height: 25, width: 25 }}/>
                    </div>
                </BackSide>
              </Flippy>
            </div>
          </div>
        </div>
      </div>

      <div class="row py-4 px-4 my-4">
        <div class="container my-auto">
          <h2 class="mb-4">Community Team</h2>
          <div class="card-deck">
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              {/* <div class="card mb-4 h-100">
              <img src="/profiles/Sara.jpg" class="card-img-top" alt="Sara Dakin" />
                <div class="card-body">
                  <h5 class="card-title">Sara Dakin</h5>
                </div>
              </div> */}
              <Flippy
                    flipOnClick={true} // default false
                    flipDirection="horizontal"
                >
                <FrontSide 
                >
                      <img src="/profiles/Sara.jpg" class="card-img-top" alt="Sara Dakin" />
                        <div class="card-body">
                          <h5 class="card-title">Sara Dakin</h5>
                        </div>    
                </FrontSide>
                <BackSide
                    >
                    <div class="card-body">
                          <p class="card-text">
                          Sara graduated from Tufts University as a Clinical Psych major and will pursue her MSW next year to become a licensed clinical therapist. 
                          She is passionate about the intersection of mental health and digital technology and hopes to
                          run her own practice and create a product that will make therapy more accessible.
                          </p>
                          <SocialIcon url = "https://www.linkedin.com/in/sara-dakin-350b40163/" target="_blank" style={{ height: 25, width: 25 }}/>
                    </div>
                </BackSide>
              </Flippy>
            </div>
            <div class="col-md-6 col-lg-4 col-12 align-items-stretch mb-4">
              <Flippy
                    flipOnClick={true} // default false
                    flipDirection="horizontal"
                >
                <FrontSide 
                >
                      <img src="/profiles/Aina.jpg" class="card-img-top" alt="Aina Khan" />
                        <div class="card-body">
                          <h5 class="card-title">Aina Khan</h5>
                        </div>    
                </FrontSide>
                <BackSide
                    >
                    <div class="card-body">
                          <p class="card-text">
                          Currently studying Economics at the University of Pennsylvania, Aina is interested in integrating
                          social impact and technology with her background in business. 
                          She is involved in gender and racial equality initiatives, reflected in her work with The Loop and as a 
                          financial literacy mentor for West Philadelphian students.
                          </p>
                          <SocialIcon url = "https://www.linkedin.com/in/aina-khan/" target="_blank" style={{ height: 25, width: 25 }}/>
                    </div>
                </BackSide>
              </Flippy>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default About;