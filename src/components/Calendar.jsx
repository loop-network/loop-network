import React from "react";

function Calendar() {
  return (
    <div className="officehours">
      <div class="row min-vh-75 py-4 px-4 my-4">
        <div class="container my-auto">
          <h1>Calendar</h1>
          <p>
            Check out our upcoming events!
          </p>
          <iframe class="airtable-embed" src="https://airtable.com/embed/shrmbMmWtaOWFZ6Gl?backgroundColor=pink&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe>
        </div>
      </div>
    </div>

  );
}

export default Calendar;