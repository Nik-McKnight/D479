import React from "react";
import dog1 from "./images/dog1.jpg";
import dog2 from "./images/dog2.jpg";
import dog3 from "./images/dog3.jpg";
export default function Dogs() {
  return (
    <div className="Page">
      <h2>DOGS</h2>
      <div className="DogsContent">
        <img src={dog1} alt="A dog." />

        <div>
          <p>
            The domestic dog is an extremely social animal and offers a diverse
            variety of choices as there are well over 300 breeds recognized by
            the World Canine Organization. Adopting a dog offers mutual benefits
            between dog and owner. Many studies cite the social benefits of
            having a companion as well as the reduced feelings of loneliness
            from adopting a dog. Studies even show medical indicators such as{" "}
            <a
              href="https://www.ahajournals.org/doi/10.1161/CIRCOUTCOMES.119.005554"
              target="none"
            >
              reduced blood pressure and improved lipid profiles
            </a>
            . If you have a dog, it is important to make sure that you care for
            your dog; be mindful of what you feed your dog and provide enough
            opportunities for exercise. In this page, you will find more
            information about how to care for your pets throughout the various
            stages of their lives.
          </p>
        </div>
        <img src={dog2} alt="A dog with a stick." />
        <div>
          <h3>Diet & Exercise</h3>
          <p>
            Throughout dogs’ lifespans, they should generally be fed fewer meals
            as they mature. Puppies should be nursed the first two months, then
            introduced to three meals per day when they are about three to six
            months years old. Their food intake should be reduced to two meals
            per day when they are six months to one year old and finally reduced
            to one meal after they reach one year old. And a dog’s typical body
            mass is composed of somewhere between 60 and 70 percent water. The{" "}
            <a
              href="https://www.aspca.org/pet-care/dog-care/dog-nutrition-tips"
              target="none"
            >
              ASPCA
            </a>{" "}
            says just a 10 percent decrease in body water can cause illness, and
            a 15 percent loss can cause death, so make sure you keep your pooch
            hydrated! Much like humans, dogs need to have a healthy level of
            activity to keep their organs healthy, as well as sun and fresh air.
            The minimum recommended time for exercise varies greatly with breed
            and size differences, but generally a range of 30–120 minutes of
            exercise is recommended per day! Can you imagine exercising two
            hours per day? OK, I know that wouldn't bother some of you reading
            this. But the thought of it to me makes me cringe! And by the way,
            exercising your dog does not mean you are being challenged to a
            push-up contest. Brisk walks are OK too! You can also choose from a
            variety of toys to encourage physical activity; just be sure they
            are age appropriate and do not pose a choking hazard. Pay careful
            attention to toys that require supervision.
          </p>
        </div>
        <img src={dog3} alt="Two dogs." />
        <div>
          <h3>Grooming & Handling</h3>

          <p>
            Keeping your furry family member clean is important to its health.
            So be sure to brush frequently to reduce the amount of shedding and
            prevent matted and tangled fur that can prove to be extremely
            difficult to remove. Check for insects such as ticks and fleas,
            especially after visiting heavily wooded areas. Bathing is not only
            important to your dog’s health but can be an exercise depending on
            how strong willed the dog is. Rinse all of the soap out, as any
            residual soap can result in a rash. Be sure the soap is formulated
            for your puppy or dog, since harsh soaps can cause allergic
            reactions. And as always, be careful how you handle your loved one.
            No matter the size of your dog, you need to be cautious as you carry
            your canine. If you have a small dog, then cradle the pup with one
            hand under the chest and the forearm supporting the back half. If it
            is a large dog, reach under the belly with both your arms
            perpendicular to the dog, and use each arm to support the chest and
            rear as you lift.
          </p>
        </div>
        <div>
          <h3>Vaccinations & Medications</h3>

          <p>
            You should always consult with your veterinarian, but there is a
            core set of vaccines that are typically recommended. Vaccines that
            reduce the exposure risk to things such as hepatitis, rabies, and
            parvovirus. Others may be determined by your vet depending on the
            environment in which the dog resides. Some of these include{" "}
            <a
              target="none"
              href="https://www.aspca.org/pet-care/general-pet-care/vaccinations-your-pet"
            >
              Bordetella bronchiseptica, Borrelia burgdorferi, and Leptospira
              bacteria.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
