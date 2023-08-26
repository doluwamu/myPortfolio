import React from "react";
import projects from "../data/projects";

import dribbble from "../assets/img/socials/dribbble.png";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-4 px-6">
      <div className="header flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-center">Projects</h1>
        <p className="text-2xl text-center">Check out some of my works</p>
      </div>

      <div className="designs flex flex-col gap-4 mt-12">
        <div className="project-filter flex justify-center pb-6">
          <h2 className="font-bold px-16 text-center" data-aos="fade-down">
            All
            <div
              className="flex"
              style={{ height: "3px", width: "25px", backgroundColor: "#fff" }}
            ></div>
          </h2>
          <h2 className="font-bold px-16 text-center" data-aos="fade-down">
            Designs
            <div
              className="hidden"
              style={{ height: "3px", width: "25px", backgroundColor: "#fff" }}
            ></div>
          </h2>
          <h2 className="font-bold px-16 text-center" data-aos="fade-down">
            Websites
            <div
              className="hidden"
              style={{ height: "3px", width: "25px", backgroundColor: "#fff" }}
            ></div>
          </h2>
        </div>
        <div className="all flex flex-col gap-4 justify-center sm:items-center flex-wrap md:flex-row">
          {projects.map((project, i) => {
            return (
              <div
                className="proj-img-box h-60 sm:w-1/2 md:w-1/3 lg:w-1/4"
                key={i}
              >
                {project.type === "design" ? (
                  <>
                    <img
                      src={project.image}
                      className="project-img h-full"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      alt="img"
                    />

                    <div className="project-details flex flex-col items-center gap-3 absolute">
                      <p
                        className="text-2xl font-bold text-white text-center"
                        style={{ maxWidth: "250px" }}
                      >
                        {project.name}
                      </p>
                      <p
                        className="text-1xl text-white text-center"
                        style={{ maxWidth: "250px" }}
                      >
                        {project.description}
                      </p>
                      <a
                        href={project.dribbble}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={dribbble} alt="img" width={"20px"} />
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={project.image}
                      className="project-img h-full"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      alt="img"
                    />

                    <div className="website-details flex flex-col gap-1 absolute">
                      <p
                        className="text-1xl font-bold text-white"
                        style={{ maxWidth: "250px" }}
                      >
                        {project.name}
                      </p>
                      <p
                        className="text-1xl text-white text-center"
                        style={{ maxWidth: "250px" }}
                      >
                        {project.description}
                      </p>
                      <div className="flex gap-4">
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src={dribbble} alt="img" width={"15px"} />
                          </a>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}

          {/* extra cards */}
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
