import React, { useEffect } from "react";
import Picture2 from "./images/hotel-restaurant-6-Skyhigh.png";
import Picture3 from "./images/hotel2.jpg";
import Picture4 from "./images/restaurant.jpg";
import Picture5 from "./images/grocery.jpg";
import { Link } from "react-router-dom";

export default function Food() {
  useEffect(() => {
    const canControlScrollRestoration = "scrollRestoration" in window.history;
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Page">
      <h2>Food and Lodging</h2>
      <div className="DogsContent">
        <img src={Picture2} alt="A hotel restaurant." />
      </div>
      <div className="CatsContent">
        <div>
          <p>[Blurb about lodging.]</p>
          <p>[Link to relevant booking page.]</p>
        </div>
        <img src={Picture3} alt="A hotel." />
        <img src={Picture4} alt="A tropical restaurant." />
        <div>
          <p>[Blurb about restaurants.]</p>
          <p>[Link to relevant booking page.]</p>
        </div>
        <div>
          <p>[Blurb about grocery stores.]</p>
          <p>[Link to relevant booking page.]</p>
        </div>
        <img src={Picture5} alt="A grocery store." />
      </div>
    </div>
  );
}
