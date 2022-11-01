import React from "react";
import "./MailList.css";
function MailList() {
  return (
    <div className="maillist">
      {/* div */}
      <div className="maillist__quote">
        <span className="maillist__heading">Save time, save money!</span>
        <span className="maillist__pre">
          Sign up and we'll send the best deals to you
        </span>
      </div>
      {/* input and button */}
      <div className="maillist__button">
        <input type="text" />
        <button>Subscribe</button>
      </div>
      {/* checkbox*/}
      <div className="maillist__checkbox">
        <input type="checkbox" className="maillist__checkbox" id="link" />
        <label for="link">
          Send me a link to get the FREE Booking.com app!
        </label>
      </div>
    </div>
  );
}

export default MailList;
