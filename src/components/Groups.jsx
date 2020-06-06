import React from "react";

function Groups() {
  return (
    <div className="groups">
      <section class="first-section">
        <div class="container">
          <div class="row align-items-center my-5">
          <div class="col-lg-5">
              <h1>Group Salons</h1>
              <p>
                More in-depth description of Group Salons and the purpose of these meetings - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </div>
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <h3>Upcoming Events</h3>
        </div>
      </section>
    </div>
  );
}

export default Groups;