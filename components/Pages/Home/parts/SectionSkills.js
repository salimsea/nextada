import { Container, SectionDescription, SectionTitle } from "components/atoms";
import React from "react";
import ItemSkill from "./components/ItemSkill";

const SectionSkills = () => {
  return (
    <section className="py-24 bg-customgray">
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <SectionDescription>
          See my use technology, i am Fullstack Developer
        </SectionDescription>
      </Container>
      {/* use grid */}
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 md:grid-cols-2 mx-4 mt-20">
        <div className="px-4 pb-8">
          <ItemSkill
            name="Next.js"
            level="Lanjutan"
            image="/nextjs.svg"
            imageClassName="h-16 rounded-full"
          />
        </div>
        <div className="px-4 pb-8">
          <ItemSkill
            name="C#"
            level="Lanjutan"
            image="/csharp.svg"
            imageClassName="h-16 rounded-full"
          />
        </div>
        <div className="px-4 pb-8">
          <ItemSkill
            name="React JS"
            level="Lanjutan"
            image="/react.svg"
            imageClassName="h-16"
          />
        </div>
        <div className="px-4 pb-8">
          <ItemSkill
            name="Node JS"
            level="Lanjutan"
            image="/nodejs.svg"
            imageClassName="h-16"
          />
        </div>
        <div className="px-4 pb-8">
          <ItemSkill
            name="DotNet"
            level="Lanjutan"
            image="/dotnet.svg"
            imageClassName="h-16"
          />
        </div>
        <div className="px-4 pb-8">
          <ItemSkill
            name="CodeIgniter"
            level="Lanjutan"
            image="/codeigniter.svg"
            imageClassName="h-16"
          />
        </div>
      </div>
      {/* use flex */}
      {/* <div className="flex mx-4 mt-20 flex-wrap">
        <div className="w-4/12 px-4 pb-8">
          <ItemSkill
            name="Next.js"
            level="Lanjutan"
            image="/nextjs.svg"
            imageClassName="h-16 rounded-full"
          />
        </div>
        <div className="w-4/12 px-4 pb-8">
          <ItemSkill
            name="C#"
            level="Lanjutan"
            image="/csharp.svg"
            imageClassName="h-16 rounded-full"
          />
        </div>
        <div className="w-4/12 px-4 pb-8">
          <ItemSkill
            name="React JS"
            level="Lanjutan"
            image="/react.svg"
            imageClassName="h-16"
          />
        </div>
        <div className="w-4/12 px-4 pb-8">
          <ItemSkill
            name="Node JS"
            level="Lanjutan"
            image="/nodejs.svg"
            imageClassName="h-16"
          />
        </div>
        <div className="w-4/12 px-4 pb-8">
          <ItemSkill
            name="DotNet"
            level="Lanjutan"
            image="/dotnet.svg"
            imageClassName="h-16"
          />
        </div>
        <div className="w-4/12 px-4 pb-8">
          <ItemSkill
            name="CodeIgniter"
            level="Lanjutan"
            image="/codeigniter.svg"
            imageClassName="h-16"
          />
        </div>
      </div> */}
    </section>
  );
};

export default SectionSkills;
