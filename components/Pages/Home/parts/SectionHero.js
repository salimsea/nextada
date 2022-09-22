import { Button, Navbar } from "components/atoms";
import React from "react";
import SectionShape from "./SectionShape";

const SectionHero = () => {
  return (
    <>
      <div className="bg-hero">
        <div className="container mx-auto">
          {/* section header */}
          <Navbar />
          {/* section hero */}
          <div className="text-center my-20">
            <h1 className="text-3xl text-white font-semibold font-mono w-10/12 mx-auto">
              Fullstack Developer - I’am a front-end designer & back-end
              developer From Indonesia 🇮🇩
            </h1>
            <p className="text-lg text-opacity-60 text-white w-6/12 mx-auto mt-6">
              Techstack i like to use html, css, javascript, reactjs, react
              native, csharp, php, postgresql, mysql
            </p>
            <Button variant="yellow" className="my-10">
              Learn More
            </Button>
          </div>
        </div>
        {/* section shape */}
        <SectionShape />
      </div>
    </>
  );
};

export default SectionHero;
