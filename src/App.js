import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import Cats from "./Cats";
import Dogs from "./Dogs";
import logo from "./images/PPP.png";
import Fish from "./Fish";
import Question from "./Question";

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
        <NavLink className="navLink" activeClassName="selected" to="/cats">
          Food and Lodging
        </NavLink>
        <NavLink className="navLink" activeClassName="selected" to="/dogs">
          Sightseeing
        </NavLink>
        <NavLink className="navLink" activeClassName="selected" to="/birds">
          Entertainment
        </NavLink>
        <NavLink className="navLink" activeClassName="selected" to="/fish">
          Transportation
        </NavLink>
        <NavLink className="navLink" activeClassName="selected" to="/about">
          FAQ
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/D277" element={<Home />}></Route>
        <Route path="/cats" element={<Cats />}></Route>
        <Route path="/dogs" element={<Dogs />}></Route>
        <Route path="/fish" element={<Fish />}></Route>
        <Route path="/about" element={<Question />}></Route>
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
