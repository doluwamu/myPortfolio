import React, { useState } from "react";
import avatar from "../assets/img/avatar.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar flex items-center p-2 xsm:mb-20 sm:mb-20 xsm:justify-between sm:justify-evenly md:justify-center md:gap-12">
      <span className="nav-logo">
        <img src={avatar} alt="img" />
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a
          href="#about"
          className="font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          About
        </a>
        <a
          href="#stacks"
          className="font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          Stacks
        </a>
        <a
          href="#projects"
          className="font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          Projects
        </a>
        <a
          href="#contact-me"
          className="font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          Contact
        </a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
