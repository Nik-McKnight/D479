import React from "react";
import Picture2 from "./images/Picture2.jpg";
import Picture3 from "./images/Picture3.jpg";

export default function Home() {
  return (
    <div className="Page">
      <h2>HOME</h2>
      <div className="DogsContent">
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
        <img
          src={Picture2}
          alt="A man giving a presentation in a conference room."
        />
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
        <div>
          <p>
            Looking for basic pet care advice for the most common type of pets?
            Need additional help determining which type of pet is right for you
            and your family? We will work with you and provide tailored
            evidence-based pet care to ensure lifelong health and wellness of
            your new companion.
          </p>
        </div>
        <div>
          <p>
            Looking for your new best friend? The following organizations can
            help you find and adopt the perfect companion:
            <ul>
              <li>
                General Adoption Resources:{" "}
                <a target="none" href="https://theshelterpetproject.org/">
                  https://theshelterpetproject.org/
                </a>
              </li>
              <li>
                ASPCA:{" "}
                <a target="none" href="https://www.aspca.org/">
                  https://www.aspca.org/
                </a>
              </li>
              <li>
                Fish Rescue:{" "}
                <a
                  target="none"
                  href="https://www.sterlingshelter.org/humane-society/koi-fish-rescue/"
                >
                  https://www.sterlingshelter.org/humane-society/koi-fish-rescue/
                </a>
              </li>
              <li>
                Snake Rescue:{" "}
                <a
                  target="none"
                  href="https://savethesnakes.org/snakerescuecall/"
                >
                  https://savethesnakes.org/snakerescuecall/
                </a>
              </li>
              <li>
                Bird Rescue:{" "}
                <a target="none" href="https://ftlob.rescuegroups.org/">
                  https://ftlob.rescuegroups.org/
                </a>
              </li>
            </ul>
          </p>
        </div>
        <div>
          <p>
            We are also happy to help you navigate the adoption process! We will
            guide you through each step in the process from determining which
            type of pet is best suited for your family and home environment, to
            completing the necessary paperwork, to bringing your new loved one
            home. Please fill out our contact form to request a consultation. We
            will contact you within 48 hours to schedule a consultation. All
            fields are required.
          </p>
        </div>
      </div>
    </div>
  );
}
