import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import logo from "./images/PPP.png";
import Question from "./Question";
import Sightseeing from "./Sightseeing";
import Food from "./Food";
import Entertainment from "./Entertainment";
import Transportation from "./Transportation";

function App() {
  return (
    <div className="App">
      <header>
        <img
          className="logo"
          src={logo}
          alt="Paradigm Pet Partners Logo"
          title="Paradigm Pet Partners Logo"
        ></img>

        <div className="heading">
          <h1>Taniti</h1>
          <h6>Of all the islands that exist, this is(n't) one of them!</h6>
        </div>
      </header>
      <nav>
        <NavLink className="navLink" activeClassName="selected" to="/">
          Home
        </NavLink>
        <NavLink
          className="navLink"
          activeClassName="selected"
          to="/foodandlodging"
        >
          Food and Lodging
        </NavLink>
        <NavLink
          className="navLink"
          activeClassName="selected"
          to="/sightseeing"
        >
          Sightseeing
        </NavLink>
        <NavLink
          className="navLink"
          activeClassName="selected"
          to="/entertainment"
        >
          Entertainment
        </NavLink>
        <NavLink
          className="navLink"
          activeClassName="selected"
          to="/transportation"
        >
          Transportation
        </NavLink>
        <NavLink className="navLink" activeClassName="selected" to="/about">
          FAQ
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/D277" element={<Home />}></Route>
        <Route path="/foodandlodging" element={<Food />}></Route>
        <Route path="/sightseeing" element={<Sightseeing />}></Route>
        <Route path="/entertainment" element={<Entertainment />}></Route>
        <Route path="/transportation" element={<Transportation />}></Route>
        <Route path="/about" element={<Question />}></Route>
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
