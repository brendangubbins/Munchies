import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Room from "./components/Room/Room";
import About from "./About";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/About" render={() => <About />} />
        <Route exact path="/Room" render={() => <Room />} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
