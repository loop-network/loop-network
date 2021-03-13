import React from "react";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 bg-white px-4 my-4">
        <div class="container">
          <h2 class="mb-2">Want to Know More?</h2>
          <div class="row">
            <div class="col-lg-6 mb-4">
              <h5 class="mb-2">We’re always looking for feedback. Ping us at helloloopnetwork@gmail.com</h5>
                <div id="mc_embed_signup">
                  <form action="https://squarespace.us19.list-manage.com/subscribe/post?u=192e08f3316678f1d6916d453&amp;id=f7ea5c925e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                      <input type="email" name="EMAIL" class="form-control mb-2" id="mce-EMAIL" placeholder="Email Address" aria-describedby="emailHelp" required />
                      <div id="some-box" aria-hidden="true">
                        <input type="text" name="b_192e08f3316678f1d6916d453_f7ea5c925e" tabindex="-1" />
                      </div>
                      <div class="clear">
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btn-primary"/>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            <div class="col-lg-6">
              <h5 class="mb-2">Contact us and stay updated.</h5>
              <p><FontAwesomeIcon icon={faEnvelopeSquare} /> helloloopnetwork@gmail.com</p>
              <p><FontAwesomeIcon icon={faLinkedin} /> <a href="https://www.linkedin.com/company/the-loop-network">@helloloopnetwork</a></p>
              <p><FontAwesomeIcon icon={faInstagram} /> <a href="https://www.instagram.com/helloloopnetwork/">@helloloopnetwork</a></p>
            </div>
          </div>
          <br />
          <p class="m-0 text-center text-black">
            &copy; The Loop 2020
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;