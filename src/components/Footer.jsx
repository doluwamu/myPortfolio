import React from "react";
import github from "../assets/img/socials/github.png";
import linkedin from "../assets/img/socials/linkedin.png";
import dribbble from "../assets/img/socials/dribbble.png";
import whatsapp from "../assets/img/socials/whatsapp.png";

const Footer = () => {
  return (
    <section className="flex flex-col items-center gap-8 py-4">
      <div className="socials flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold">Follow me on my socials</h1>
        <div className="social-links flex gap-8">
          <a
            href="https://www.linkedin.com/in/doluwamu-adeitan-41bab5201/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>

          <a
            href="https://github.com/doluwamu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" />
          </a>

          <a
            href="https://dribbble.com/doluwamu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={dribbble} alt="dribbble" />
          </a>

          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="whatsapp" />
          </a>
        </div>
      </div>

      <a
        href="/docs/resume.pdf"
        target="_blank"
        className="py-4"
        rel="noopener noreferrer"
        style={{ width: "150px" }}
      >
        <p className="font-bold text-center text-green">View my resume</p>
      </a>

      <p className="text-center">
        &copy; <span>2023, Doluwamu.</span>
      </p>
    </section>
  );
};

export default Footer;
