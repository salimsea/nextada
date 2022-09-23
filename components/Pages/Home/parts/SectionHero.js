import { Button, Navbar, Container } from "components/atoms";
import React from "react";
import SectionShape from "./SectionShape";

const SectionHero = () => {
  return (
    <>
      <div className="bg-hero">
        <Container>
          {/* section header */}
          <Navbar />
          {/* section hero */}
          <div className="text-center my-20">
            <h1 className="text-3xl text-white font-semibold font-mono 2xl:w-8/12 md:w-11/12 w-12/12 mx-auto">
              Fullstack Developer - I’am a front-end designer & back-end
              developer From Indonesia 🇮🇩
            </h1>
            <p className="text-lg text-opacity-60 text-white 2xl:w-4/12 md:w-8/12 w-12/12 mx-auto mt-6">
              Techstack i like to use html, css, javascript, reactjs, react
              native, csharp, php, postgresql, mysql
            </p>
            <Button variant="yellow" className="my-10">
              Learn More
            </Button>
          </div>
        </Container>
        {/* section shape */}
        <SectionShape />
      </div>
    </>
  );
};

export default SectionHero;
