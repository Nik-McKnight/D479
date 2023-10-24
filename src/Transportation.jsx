import React, { useEffect } from "react";
import Picture2 from "./images/transportation.jpg";
import Picture3 from "./images/bus.jpg";
import Picture4 from "./images/taxi.jpg";
import Picture5 from "./images/whistler-bike-rental.jpg";
import { Link } from "react-router-dom";

export default function Transportation() {
  useEffect(() => {
    const canControlScrollRestoration = "scrollRestoration" in window.history;
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Page">
      <h2>Transportation</h2>
      <div className="DogsContent">
        <img src={Picture2} alt="Ground Transportation Options." />
      </div>
      <div className="CatsContent">
        <div>
          <p>[Blurb about bus system.]</p>
          <p>[Link to relevant booking page.]</p>
        </div>
        <img src={Picture3} alt="A public bus." />
        <img src={Picture4} alt="A taxi." />
        <div>
          <p>[Blurb about taxis and rental cars.]</p>
          <p>[Link to relevant booking page.]</p>
        </div>
        <div>
          <p>[Blurb about bicycle rentals.]</p>
          <p>[Link to relevant booking page.]</p>
        </div>
        <img src={Picture5} alt="A bike rental business." />
      </div>
    </div>
  );
}
