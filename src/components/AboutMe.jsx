import React from "react";
import avatar from "../assets/img/avatar-large.png";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="flex flex-col-reverse items-center justify-center gap-16 my-24 px-6 md:flex-row md:py-2"
      style={{ maxWidth: "1100px", margin: "0 auto" }}
    >
      {/* image */}
      <div className="flex justify-center md:w-1/3 md:justify-left">
        <img src={avatar} alt="img" width={"320px"} />
      </div>

      {/* text */}
      <div className="flex flex-col gap-4 md:w-2/3">
        <h1 className="text-3xl font-bold">About me</h1>
        <p className="text-justify">
          I am a fullstack developer and product designer with over three years
          of experience in building web and mobile technologies. With knowledge
          and experience in multiple languages and frameworks on both the
          frontend and backend side of development, I am pretty confident in
          taking up challenging and interesting tasks.
          <br />
          <br />
          I’m open to roles that can help me contribute my skill sets to
          creating awesome and mind blowing products
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
