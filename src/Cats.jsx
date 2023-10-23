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
          <p>
            Cats were first domesticated around 7500 BCE in the western Asia
            region and are currently the second most popular domestic pet in the
            United States. While there are over 60 unique documented cat breeds,
            care and diet can differ between breeds. However, some diets and
            practices are generally recommended for the well-being of your
            fluffy family member regardless of breed.
          </p>
        </div>
        <img src={cat3} alt="A young cat." />
      </div>
      <h2>Dietary Needs By Age</h2>
      <div className="CatsContent">
        <img src={cat5} alt="A baby cat." />
        <div>
          <h3>Zero to Four Weeks</h3>
          <p>
            It is important the queen (a term commonly used for a female cat
            that is either pregnant or nursing) directly nurse her young if
            possible. Monitor your kitten’s growth closely to make sure its
            growth rate is progressing steadily. If any kitten is not growing at
            a sufficient rate, a caretaker might need to feed the kitten
            directly either with a bottle or a feeding tube. Some reasons why
            kittens might not gain weight appropriately include the following:
            <ul>
              <li>too many other siblings are competing for mom's milk</li>
              <li>gastrointestinal disease</li>
              <li>
                environmental conditions such as extreme heat or cold, or
                unsanitary conditions.
              </li>
            </ul>
          </p>
        </div>
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
