import React from "react";
import Picture2 from "./images/st-lucia-getty.jpg";
import Picture3 from "./images/Picture3.jpg";

export default function Transportation() {
  return (
    <div className="Page">
      <h2>Transportation</h2>
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
          <p>
            Looking for basic pet care advice for the most common type of pets?
            Need additional help determining which type of pet is right for you
            and your family? We will work with you and provide tailored
            evidence-based pet care to ensure lifelong health and wellness of
            your new companion.
          </p>
        </div>
        <img src={Picture3} alt="A one-on-one consultation." />

        <img
          src={Picture3}
          alt="A man giving a presentation in a conference room."
        />
        <div>
          <p>
            Pets are nature's gift to humanity. It has been scientifically
            proven that opening our homes and hearts to a pet increases our
            longevity and improves our overall quality of life as well as the
            lives of our pets. At Pet Paradigm Professionals, our mission is to
            offer resources to help you care for your furry, scaly, feathery,
            and slimy loved ones. Our pet experts—or “Pexperts”—have been
            working with pet owners and professionals alike for the past twelve
            years. They offer one-on-one consultations with current and
            prospective pet owners as well as group presentations designed for
            veterinary, pet shelter, and pet breeding professionals.
          </p>
        </div>
        <div>
          <p>
            Looking for basic pet care advice for the most common type of pets?
            Need additional help determining which type of pet is right for you
            and your family? We will work with you and provide tailored
            evidence-based pet care to ensure lifelong health and wellness of
            your new companion.
          </p>
        </div>
        <img src={Picture3} alt="A one-on-one consultation." />
      </div>
    </div>
  );
}
