import "./styles.css";
import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Notfound from "./Notfound";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <>
        {/* <h1>React Router Example</h1> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Notfound} />
        </Switch>
      </>
    </Router>
  );
}
