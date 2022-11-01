import React from "react";
import "./Featured.css";
function Featured() {
  return (
    <div className="featured">
      <div className="featured__item">
        <img
          src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768"
          style={{ width: 500, objectFit: "contain" }}
        />
        <div className="featured__title">
          <h1>Reno</h1>
          <h3>223 properties</h3>
        </div>
      </div>
      <div className="featured__item">
        <img
          src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768"
          style={{ width: 500, objectFit: "contain" }}
        />
        <div className="featured__title">
          <h1>Reno</h1>
          <h3>223 properties</h3>
        </div>
      </div>
      <div className="featured__item">
        <img
          src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768"
          style={{ width: 500, objectFit: "contain" }}
        />
        <div className="featured__title">
          <h1>Reno</h1>
          <h3>223 properties</h3>
        </div>
      </div>
    </div>
  );
}

export default Featured;
