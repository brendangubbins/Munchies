import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Room from "./components/Room/Room";
import About from "./About";
import "./index.css";
import { useEffect } from 'react';
import io from 'socket.io-client';

let socket;
const PORT = 'http://localhost:5000';

const App = () => {

  // Should only create socket once on app render
  useEffect(() => {
    socket = io(PORT);
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/About" render={() => <About />} />
        <Route exact path="/Room" render={() => <Room socket={socket} />} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
