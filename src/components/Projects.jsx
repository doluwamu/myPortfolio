import React from "react";
import projects from "../data/projects";

import dribbble from "../assets/img/socials/dribbble.png";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-4 px-6">
      <div className="header">
        <h1 className="text-5xl font-bold text-center">Projects</h1>
      </div>

      <div className="designs flex flex-col gap-4 mt-12">
        <h2 className="font-bold px-16 text-center" data-aos="fade-down">
          Designs
        </h2>
        <div className=" flex flex-col gap-4 justify-center sm:items-center flex-wrap md:flex-row">
          {projects.designs.map((design, i) => (
            <a
              href={design.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-img-box h-60 sm:w-1/2 md:w-1/3 lg:w-1/4"
              // style={{ height: "200px" }}
              key={i}
              data-aos="fade-up"
            >
              <img
                src={design.image}
                className="project-img h-full"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                alt="img"
              />

              <div className="project-details flex flex-col items-center gap-3 absolute">
                <p
                  className="text-2xl font-bold text-white text-center"
                  style={{ maxWidth: "250px" }}
                >
                  {design.name}
                </p>
                <p
                  className="text-1xl text-white text-center"
                  style={{ maxWidth: "250px" }}
                >
                  {design.description}
                </p>
                <div target="_blank" rel="noopener noreferrer">
                  <img src={dribbble} alt="img" width={"20px"} />
                </div>
              </div>
            </a>
          ))}

          {/* extra crds */}
          <div
            className="proj-img-box sm:w-2/3 md:w-1/3 lg:w-1/4"
            style={{ height: "0px" }}
          ></div>
          <div
            className="proj-img-box sm:w-2/3 md:w-1/3 lg:w-1/4"
            style={{ height: "0px" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
