import React from "react";
import "./join.css";

const Join = () => {
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">GOTOWY</span>
          <span> ZMIENIĆ</span>
        </div>
        <div>
          <span>SWOJE CIAŁO</span>
          <span className="stroke-text"> RAZEM Z NAMI?</span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Wpisz swój adres email"
          />
          <button className="btn btn-j">Dołącz do nas</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
