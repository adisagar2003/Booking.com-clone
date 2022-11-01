import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Carousal.css";

function Carousal() {
  return (
    <div className="carousal">
      <div className="carousal__heading">
        <h4>Offers</h4>
        <span>Promotions, deals and special offers for you.</span>
      </div>
      <div className="carousal__layout">
        <div className="carousal__layout--card">
          <img src="https://q-xx.bstatic.com/psb/capla/static/media/long_stays_banner_wide.a1b12d47.png" />

          <span style={{ fontWeight: "bold", marginTop: 10, marginLeft: 10 }}>
            Save 15% with Late Escape Deals
          </span>
          <span style={{ marginTop: 10, marginLeft: 10 }}>
            Tick one more destination off your wishlist
          </span>
          <button>Explore Deals</button>
        </div>
        <div className="carousal__layout--card">
          <span style={{ fontWeight: "bold", marginTop: 10, marginLeft: 10 }}>
            Fly away to your dream holiday
          </span>
          <img src="https://q-xx.bstatic.com/psb/capla/static/media/long_stays_banner_wide.a1b12d47.png" />
          <span style={{ marginTop: 10, marginLeft: 10 }}>
            Get inspired, compare and book flights with more flexibility
          </span>
          <button>Search for flights</button>
        </div>
        <div className="carousal__layout--card">
          <img src="https://q-xx.bstatic.com/psb/capla/static/media/long_stays_banner_wide.a1b12d47.png" />
          <span style={{ fontWeight: "bold" }}>Escape for a while</span>
          <span>Enjoy the freedom of a monthly stay on Booking.com</span>
          <button>Discover stays</button>
        </div>
      </div>
    </div>
  );
}

export default Carousal;
