import React, { useEffect, useRef } from "react";
import heropic from "../assets/img/hero_pic.png";
import Typed from "typed.js";

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
        <h1 className="text-4xl text-black font-black text-center md:text-left md:text-6xl">
          Hi, I’m Doluwamu
        </h1>
        <p className="text-1xl text-black font-bold text-center md:text-left md:text-3xl">
          I’m a <span ref={el}></span>
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
            className="hero-btn border px-5 py-2 rounded-lg border-green text-green"
          >
            {" "}
            Get in touch
          </a>

          <a
            className="hero-btn border px-5 py-2 rounded-lg border-darkGrey bg-darkGrey text-white"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1p5eKVKXYis-lapqu1ZiNs5b_yKY0Jvf9/view?usp=sharing"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center md:w-1/2">
        <img src={heropic} alt="img" width={"450px"} />
      </div>
    </section>
  );
};

export default Hero;
