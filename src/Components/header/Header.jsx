import {
  faBed,
  faCab,
  faCalendarDay,
  faCar,
  faPerson,
  faPlane,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css"; // main style file
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/theme/default.css"; // theme css fil
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Calendar } from "react-date-range";
import "./Header.css";
import { format } from "date-fns";
function Header() {
  const [showCalender, setCalender] = useState(false);
  const [showOptions, setVisibleOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="header">
      <div className="header__list">
        <div className="header__list--item active">
          <FontAwesomeIcon icon={faBed} />
          <span>Stays</span>
        </div>
        <div className="header__list--item">
          <FontAwesomeIcon icon={faPlane} />
          <span>Flights</span>
        </div>
        <div className="header__list--item">
          <FontAwesomeIcon icon={faCar} />
          <span>Car Rentals</span>
        </div>
        <div className="header__list--item">
          <FontAwesomeIcon icon={faUmbrellaBeach} />
          <span>Attractions</span>
        </div>
        <div className="header__list--item">
          <FontAwesomeIcon icon={faCab} />
          <span>Airport Taxis</span>
        </div>
      </div>
      <h1 className="header__title">A lifetime of discounts? It's Genius.</h1>
      <p className="header__description">Get rewards while you travel</p>
      <button className="header__button">Sign in/Register </button>
      <div className="header__search">
        <div className="header__search__item">
          <FontAwesomeIcon icon={faBed} className="header__icon" />
          <input
            type="text"
            placeholder="Where are you going?"
            className="header__search__input"
          />
        </div>
        <div
          className="header__search__item"
          onClick={() => {
            setCalender(!showCalender);
          }}
        >
          <FontAwesomeIcon
            icon={faCalendarDay}
            className="header__icon calendar"
          />
          <span className="header__date">
            {console.log(date)}
            {format(date[0].startDate, "MM/dd/yyyy")}
          </span>
          {showCalender && (
            <DateRangePicker
              editableDateInputs={true}
              ranges={[selectionRange]}
              moveRangeOnFirstSelection={false}
              onChange={(item) => setDate(item.selection)}
              className="header__date"
            />
          )}
        </div>
        <div className="header__search__item">
          <div className="header__search__item__text">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span
              className="header__text roomsearch"
              onClick={() => setVisibleOptions(!showOptions)}
            >{`${options.adult} adult . ${options.children} . room ${options.room}`}</span>
          </div>
          <button className="header__button search">Search</button>
        </div>

        <div className="header__options">
          <h3 className="header__options--options"></h3>
          <div>
            {showOptions && (
              <div class="header__options--layout">
                {" "}
                <div className="header__option">
                  <span className="header__adult">Adult</span>
                  <div className="header__buttons">
                    <button
                      disabled={options.adult < 1}
                      className="header__option__button"
                      onClick={() => handleOption("adult", "a")}
                    >
                      -
                    </button>
                    <button className="option__counternumber">
                      {options.adult}
                    </button>
                    <button
                      className="header__option__button"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="header__option">
                  <span className="header__adult">Children</span>
                  <div className="header__buttons">
                    <button
                      disabled={options.children < 1}
                      className="header__option__button"
                      onClick={() => handleOption("children", "n")}
                    >
                      -
                    </button>
                    <button className="option__counternumber">
                      {options.children}
                    </button>
                    <button
                      className="header__option__button"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="header__option">
                  <span className="header__adult">Room</span>
                  <div className="header__buttons">
                    <button
                      className="header__option__button"
                      onClick={() => handleOption("room", "0")}
                      disabled={options.room < 1}
                    >
                      -
                    </button>
                    <button className="option__counternumber">
                      {options.room}
                    </button>
                    <button
                      className="header__option__button"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
