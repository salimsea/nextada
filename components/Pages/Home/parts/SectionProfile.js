import { SectionDescription, SectionTitle } from "components/atoms";
import React from "react";

const SectionProfile = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <SectionTitle>Profile</SectionTitle>
        <SectionDescription>
          About me profile, read my bio here
        </SectionDescription>
        <div className="flex w-9/12 mx-auto mt-12 items-center">
          <div className="w-5/12 p-10">
            <img
              src="https://salimseal.com/_ipx/w_128,q_75/%2F_next%2Fstatic%2Fmedia%2Fuser.b5ff3a88.png?url=%2F_next%2Fstatic%2Fmedia%2Fuser.b5ff3a88.png&w=128&q=75"
              className="w-60 mt-3"
            />
            <div className="bg-gradient-to-r from-[#eb01a5] to-[#d13531] rounded-full p-2 w-28 h-28 -mt-24"></div>
          </div>
          <div className="w-8/12 px-10">
            <p className="text-lg leading-relaxed text-justify">
              Fullstack Developer - I’am a front-end designer & back-end
              developer From Indonesia 🇮🇩
            </p>
            <p className="text-lg leading-relaxed text-justify">
              Hai, my name Salim Segaf Alqosam, I am from Indonesia and a
              software engineer, I have experience in making mobile applications
              and websites, I can solve problems in difficulty, have a
              willingness to learn new technology, and can work with a team.
            </p>

            <p className="text-lg mt-6 leading-relaxed text-justify text-transparent bg-clip-text bg-gradient-to-r from-[#eb01a5] to-[#d13531]">
              Techstack i like to use html, css, javascript, reactjs, react
              native, csharp, php, postgresql, mysql.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProfile;
