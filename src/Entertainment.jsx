import React, { useEffect } from "react";
import Picture2 from "./images/snorkellers.jpg";
import Picture3 from "./images/Private-Helicopter-Rides.jpg";
import Picture4 from "./images/fishing.jpg";
import Picture5 from "./images/golf.jpg";
import { Link } from "react-router-dom";

export default function Sightseeing() {
  useEffect(() => {
    const canControlScrollRestoration = "scrollRestoration" in window.history;
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Page">
      <h2>Sightseeing</h2>
      <div className="DogsContent">
        <img src={Picture2} alt="People snorkelling." />
      </div>
      <div className="CatsContent">
        <div>
          <p>[Blurb about helicopter rides.</p>
          <p>[Link to relevant booking page.]</p>
        </div>
        <img src={Picture3} alt="A helicopter." />
        <img src={Picture4} alt="A fishing boat." />
        <div>
          <p>[Blurb about fishing boat charters.]</p>
          <p>[Link to relevant booking page.]</p>
        </div>
        <div>
          <p>[Blurb about the new golf course.]</p>
          <p>[Link to relevant booking page.]</p>
        </div>
        <img src={Picture5} alt="A golf course." />
      </div>
    </div>
  );
}
