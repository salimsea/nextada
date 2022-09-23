import { Container, SectionDescription, SectionTitle } from "components/atoms";
import React from "react";
import ItemProject from "./components/ItemProject";

const SectionProjects = () => {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <SectionDescription>See my project build with me</SectionDescription>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mx-4 mt-20">
          <div className="px-4 pb-8">
            <ItemProject
              name="Project One"
              description="Explorer My Design UI"
              image="/project1.png"
            />
          </div>
          <div className="px-4 pb-8">
            <ItemProject
              name="Project Two"
              description="Explorer My Design UI"
              image="/project2.png"
            />
          </div>
          <div className="px-4 pb-8">
            <ItemProject
              name="Project Three"
              description="Explorer My Design UI"
              image="/project3.png"
            />
          </div>
          <div className="px-4 pb-8">
            <ItemProject
              name="Project Four"
              description="Explorer My Design UI"
              image="/project4.png"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionProjects;
