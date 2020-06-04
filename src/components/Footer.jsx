import React from "react";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 bg-white">
        <div class="container">
          <h1>Stay in the Loop</h1>
          <div class="row">
            <div class="col-lg-6">
              <h5>Receive content, events, and more.</h5>
                <form>
                  <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address"/>
                  </div>
                  <button type="submit" class="btn btn-cta">Subscibe</button>
                </form>
            </div>
            <div class="col-lg-6">
              <h5>Contact us and stay updated.</h5>
              <p><FontAwesomeIcon icon={faEnvelopeSquare} /> helloloopnetwork@gmail.com</p>
              <p><FontAwesomeIcon icon={faLinkedin} /> @helloloopnetwork</p>
              <p><FontAwesomeIcon icon={faTwitter} /> @helloloopnetwork</p>
              <p><FontAwesomeIcon icon={faInstagram} /> @helloloopnetwork</p>
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