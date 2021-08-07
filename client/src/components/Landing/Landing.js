import { useEffect } from "react";
import Hero from "./Hero";
import LandingForm from "./LandingForm";

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <br></br>
      <LandingForm />
    </>
  );
};

export default Landing;
