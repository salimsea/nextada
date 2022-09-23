import { Container, SectionDescription, SectionTitle } from "components/atoms";
import React from "react";

const SectionProfile = () => {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle>Profile</SectionTitle>
        <SectionDescription>
          About me profile, read my bio here
        </SectionDescription>

        <div className="flex lg:items-center md:items-start flex-wrap xl:w-9/12 mx-auto mt-10">
          <div className="md:w-5/12 w-full px-10 mb-10 md:mb-0 flex justify-center">
            <div>
              <img
                src="https://salimseal.com/_ipx/w_128,q_75/%2F_next%2Fstatic%2Fmedia%2Fuser.b5ff3a88.png?url=%2F_next%2Fstatic%2Fmedia%2Fuser.b5ff3a88.png&w=128&q=75"
                className="md:w-60 w-70 mt-3"
              />
              <div className="bg-gradient-to-r from-[#eb01a5] to-[#d13531] rounded-full p-2 md:w-28 md:h-28 w-10 h-10 md:-mt-24 -mt-8"></div>
            </div>
          </div>

          <div className="md:w-7/12 w-full px-10">
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
      </Container>
    </section>
  );
};

export default SectionProfile;
