import React, { useEffect } from "react";
import Picture2 from "./images/st-lucia-getty.jpg";
import Picture3 from "./images/hotel.jpg";
import Picture4 from "./images/zipline.jpg";
import Picture5 from "./images/hike.jpg";
import Picture6 from "./images/transportation.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    const canControlScrollRestoration = "scrollRestoration" in window.history;
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Page">
      <h2>HOME</h2>
      <div className="DogsContent">
        <img src={Picture2} alt="Tropical Island Landscape." />
      </div>
      <div className="DogsContent">
        <div>
          <p>
            Taniti is a small, tropical island in the Pacific. While the island
            has an area of less than 500 square miles, the terrain is varied and
            includes both sandy and rocky beaches, a small but safe harbor, lush
            tropical rainforests, and a mountainous interior that includes a
            small, active volcano. Taniti has an indigenous population of about
            20,000.
          </p>
        </div>
      </div>
      <div className="CatsContent">
        <div>
          <p>[Blurb about food and lodging.</p>
          <Link className="blurblink" to="/foodandlodging">
            [Link to relevant page.]
          </Link>
        </div>
        <img src={Picture3} alt="A resort next to a beach." />
        <img src={Picture4} alt="A person ziplining through a rainforest." />
        <div>
          <p>[Blurb about entertainment options.]</p>
          <Link className="blurblink" to="/sightseeing">
            [Link to relevant page.]
          </Link>
        </div>
        <div>
          <p>[Blurb about sightseeing around the island.]</p>
          <Link className="blurblink" to="/entertainment">
            [Link to relevant page.]
          </Link>
        </div>
        <img
          src={Picture5}
          alt="A family looking at a waterfall in the jungle."
        />
        <img src={Picture6} alt="Ground transportation options." />
        <div>
          <p>[Blurb about transportation options.]</p>
          <Link className="blurblink" to="/transportation">
            [Link to relevant page.]
          </Link>
        </div>
      </div>
      <div className="DogsContent">
        <div>
          <p>Questions?</p>
          <Link className="blurblink" to="/about">
            [Link to FAQ page.]
          </Link>
        </div>
      </div>
    </div>
  );
}
