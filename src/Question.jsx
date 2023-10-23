import logo from "./images/PPP.png";
export default function Question() {
  return (
    <div className="Page">
      <h2>ABOUT THE COMPANY</h2>
      <img
        className="logo"
        src={logo}
        alt="Paradigm Pet Partners Logo"
        title="Paradigm Pet Partners Logo"
        width="500px"
      ></img>
      <div className="DogsContent">
        <div>
          <p>
            Paradigm Pet Professionals has 12 years’ experience working with pet
            owners, certifications in pet health and nutrition, and customer
            recognition for outstanding support
          </p>
        </div>
      </div>
      <h2>SERVICES</h2>
      <div className="DogsContent">
        <div>
          <p>
            Virtual consultations and presentations, one-on-one consultations
            concerning individual pets, group presentations regarding general
            pet care (can be tailored to the needs of the group).
          </p>
        </div>
      </div>
      <h2>CONTACT</h2>
      <div className="DogsContent">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
          }}
        >
          <label>Your Name:</label>
          <input placeholder="Enter Your Name" required={true} />
          <label>Your Email:</label>
          <input placeholder="Email" required={true} />
          <label>Phone Number:</label>
          <input placeholder="Phone Number" required={true} />
          <label>Time Zone:</label>
          <input placeholder="Time Zone" required={true} />
          <label>Pet's Name:</label>
          <input placeholder="Pet's name" required={true} />
          <label>Pet Type:</label>
          <input placeholder="Pet Type" required={true} />
          <label>Pet's Age:</label>
          <input placeholder="Pet's Age" required={true} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
