import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className=" flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#f14d0bf3]">
          Discover Your Next Adventure with AI:
        </span>
        Personalized Itineraries at Your Fingertips
      </h1>
      <p>
        {" "}
        Your personal Trip Planner and travel curator, creating custom
        Itineraries tailored to your interests and budget
      </p>
      <Link to={"/create-trip"}>
        <Button> Get Started, for Free</Button>
      </Link>
    </div>
  );
};

export default HeroSection;
