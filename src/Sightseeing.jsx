import React, { useEffect } from "react";
import Picture2 from "./images/cartagena.jpg";
import Picture3 from "./images/taniti city.jpg";
import Picture4 from "./images/volcano.jpg";
import Picture5 from "./images/hike.jpg";
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
        <img src={Picture2} alt="Taniti City Old Town." />
      </div>
      <div className="CatsContent">
        <div>
          <p>[Blurb about Taniti City.</p>
          <p>[Link to relevant booking page.]</p>
        </div>
        <img src={Picture3} alt="Taniti City." />
        <img src={Picture4} alt="A volcano." />
        <div>
          <p>[Blurb about the volcano.]</p>
          <p>[Link to relevant booking page.]</p>
        </div>
        <div>
          <p>[Blurb about rainforest hikes.]</p>
          <p>[Link to relevant booking page.]</p>
        </div>
        <img
          src={Picture5}
          alt="A family looking at a waterfall in the jungle."
        />
      </div>
    </div>
  );
}
