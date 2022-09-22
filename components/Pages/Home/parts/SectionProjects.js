import { SectionDescription, SectionTitle } from "components/atoms";
import React from "react";
import ItemProject from "./components/ItemProject";

const SectionProjects = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <SectionTitle>Projects</SectionTitle>
        <SectionDescription>See my project build with me</SectionDescription>
        <div className="flex mx-4 mt-20 flex-wrap">
          <div className="w-6/12 px-4 pb-8">
            <ItemProject
              name="Project One"
              description="Explorer My Design UI"
              image="/project1.png"
            />
          </div>
          <div className="w-6/12 px-4 pb-8">
            <ItemProject
              name="Project Two"
              description="Explorer My Design UI"
              image="/project2.png"
            />
          </div>
          <div className="w-6/12 px-4 pb-8">
            <ItemProject
              name="Project Three"
              description="Explorer My Design UI"
              image="/project3.png"
            />
          </div>
          <div className="w-6/12 px-4 pb-8">
            <ItemProject
              name="Project Four"
              description="Explorer My Design UI"
              image="/project4.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProjects;
