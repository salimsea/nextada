import React from "react";
import SectionContact from "./parts/SectionContact";
import SectionHero from "./parts/SectionHero";
import SectionProfile from "./parts/SectionProfile";
import SectionProjects from "./parts/SectionProjects";
import SectionSkills from "./parts/SectionSkills";
import Footer from "components/atoms/Footer";

const ComponentHome = () => {
  return (
    <>
      {/* section hero */}
      <SectionHero />

      {/* section profile */}
      <SectionProfile />

      {/* section skills */}
      <SectionSkills />

      {/* section project */}
      <SectionProjects />

      {/* section contact */}
      <SectionContact />

      {/* section footer */}
      <Footer />
    </>
  );
};

export default ComponentHome;
