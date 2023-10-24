import { useEffect } from "react";
import logo from "./images/PPP.png";
export default function Question() {
  useEffect(() => {
    const canControlScrollRestoration = "scrollRestoration" in window.history;
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Page">
      <h2>Frequently Asked Questions</h2>
      <h2>Travel Questions</h2>
      <div className="DogsContent">
        <div>
          <p>
            [Questions and answers about power plugs, languages spoken, hours
            where alcohol can be served, holiday hours, currencies accepted,
            etc.]
          </p>
        </div>
      </div>
      <h2>Health and Safety</h2>
      <div className="DogsContent">
        <div>
          <p>[Questions and answers about crime, hospitals, etc]</p>
        </div>
      </div>
      <h2>CONTACT</h2>
      <div className="DogsContent">
        <h2>Any Questions Not Answered Here?</h2>
        <div>
          <p>[Form to email the help desk]</p>
        </div>
      </div>
    </div>
  );
}
