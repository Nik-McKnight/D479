import React from "react";
import cat1 from "./images/cat1.jpg";
import cat2 from "./images/cat2.jpg";
import cat3 from "./images/cat3.jpg";
import cat4 from "./images/cat4.jpg";
import cat5 from "./images/cat5.jpg";
export default function Cats() {
  return (
    <div className="Page">
      <h2>CATS</h2>
      <div className="CatsContent">
        <div>
          <h3>Four Weeks to One Year</h3>
          <p>
            Kittens can start being introduced to soft wet kitten food typically
            around three to four weeks after birth. According to the{" "}
            <a
              href="https://www.aspca.org/pet-care/cat-care/cat-nutrition-tips"
              target="none"
            >
              ASPCA
            </a>
            , kittens at this age should eat half to one cup of dry kitten food
            or six to nine ounces of wet kitten food per day. If your kitten has
            difficulties eating hard food, a small amount of water can be added
            to soften the food. Cat food that is optimized for kittens provides
            the additional nutrients that are needed for growth, energy, and
            wellness. Depending on the breed, your cat may have different
            dietary requirements. You should always consult with your
            veterinarian for recommendations.
          </p>
        </div>
        <img src={cat1} alt="A young cat." />
        <img src={cat2} alt="An adult cat." />
        <div>
          <h3>One Year to Seven Years</h3>
          <p>
            This age is when kittens reach the cat stage and do not need as many
            nutrients. At this age, their level of activity decreases, and so
            does their metabolism. It is not recommended to leave food out for
            the cats all day. Instead, provide food a couple times a day so they
            eat meals rather than snacking throughout the day. This practice
            reduces the risk of obesity and other weight-related feline
            ailments.
          </p>
        </div>
        <div>
          <h3>Seven Years and More</h3>
          <p>
            Much like many living organisms, the body begins to deteriorate and
            experience a lot of changes. Cats at this age should eat less fats
            and calories and more quality proteins. This means when you are
            purchasing packaged foods for your cat, look for food that states a
            particular protein (such as "salmon") and not just a category (such
            as fish). This usually means they are byproducts, or combinations,
            of lesser quality proteins.
          </p>
        </div>
        <img src={cat4} alt="A senior cat." />
      </div>
    </div>
  );
}
