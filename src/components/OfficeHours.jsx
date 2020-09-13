import React from "react";

function OfficeHours() {
  return (
    <div className="officehours">
      <div class="row min-vh-75 py-4 px-4 my-4">
        <div class="container my-auto">
          <h1>Office Hours</h1>
          <p>
            Connect with subject matter experts and experienced entrepreneurs one-on-one.
          </p>
          <iframe class="airtable-embed" src="https://airtable.com/embed/shrStuTLKWlqTQjSQ?backgroundColor=pink&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe>
        </div>
      </div>
      <div class="row min-vh-75 py-4 px-4 my-4">
        <div class="container my-auto">
          <div class="row align-items-center my-5">
            <div class="col-lg-6">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="illustrations/calendar.svg"
                alt="Teaching"
              />
            </div>
            <div class="col-lg-6 mb-4">
              <h2>Interested in becoming an Office Hours Mentor?</h2>
              <a href="https://airtable.com/shrAlZeG7cxsDPumC"><button type="button" class="btn btn-primary">Sign up now</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default OfficeHours;