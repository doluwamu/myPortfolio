import React, { useEffect, useRef } from "react";
import heropic from "../assets/img/hero_pic.png";
import Typed from "typed.js";
// import resume from "../assets/docs/resume.pdf";

const Hero = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["fullstack developer", "product designer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center gap-10 py-6 px-2 md:flex-row md:gap-2 md:py-24 md:pl-4 z-10 lg:pl-12"
      style={{ maxHeight: "650px" }}
    >
      {/* Text */}
      <div className="flex flex-col justify-center items-center gap-4 md:items-start md:w-1/2">
        <div>
          <p className="greetings text-green font-bold text-center md:text-left">
            Hi there,
          </p>
          <h1 className="my-name text-4xl text-black font-black text-center md:text-left md:text-6xl">
            Doluwamu Here
          </h1>
        </div>
        <p className="text-1xl text-black font-bold text-center md:text-left md:text-3xl">
          I’m a <span ref={el} className="text-green"></span>
        </p>
        <p className="text-center text-black md:text-left">
          I build websites and mobile app as well as make designs for amazing
          projects.
          <br />
          Let’s connect
        </p>
        <div className="buttons flex gap-4">
          <a
            href="mailto:adoluwamu@gmail.com"
            className="get-in-touch border px-5 py-2 rounded-lg border-green text-green"
          >
            <span>Get in touch</span>
          </a>

          <a
            className="hero-btn border px-5 py-2 rounded-lg border-darkGrey bg-darkGrey text-white"
            target="_blank"
            rel="noopener noreferrer"
            href="/docs/resume.pdf"
            // "https://drive.google.com/file/d/1p5eKVKXYis-lapqu1ZiNs5b_yKY0Jvf9/view?usp=sharing"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="my-image flex justify-center md:w-1/2">
        <img src={heropic} alt="img" width={"450px"} />
      </div>
    </section>
  );
};

export default Hero;
