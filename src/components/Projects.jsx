import React, { useState } from "react";
import projects from "../data/projects";

import dribbble from "../assets/img/socials/dribbble.png";
import url from "../assets/img/url.png";

const Underline = ({ hidden }) => {
  return (
    <div
      className={!hidden ? "flex" : "hidden"}
      style={{
        height: "3px",
        width: "25px",
        backgroundColor: "#fff",
        transition: "0.5s ease-in-out",
      }}
    ></div>
  );
};

const Projects = () => {
  const [all, setAll] = useState(true);
  const [design, setDesign] = useState(false);
  const [website, setWebsite] = useState(false);

  const projs =
    all === true
      ? projects
      : design === true
      ? projects.filter((p) => p.type === "design")
      : website === true
      ? projects.filter((p) => p.type === "website")
      : projects;

  const showAllProjects = () => {
    if (all === false) {
      setDesign(false);
      setWebsite(false);
      return setAll(true);
    }
  };
  const showDesignProjects = () => {
    if (design === false) {
      setAll(false);
      setWebsite(false);
      return setDesign(true);
    }
  };
  const showWebProjects = () => {
    if (website === false) {
      setAll(false);
      setDesign(false);
      return setWebsite(true);
    }
  };

  return (
    <section id="projects" className="flex flex-col gap-4 px-6">
      <div className="header flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-center">Projects</h1>
        <p className="text-2xl text-center">Check out some of my works</p>
      </div>

      <div className="designs flex flex-col gap-4 mt-12">
        <div className="project-filter flex justify-center items-center flex-wrap pb-6">
          <h2
            onClick={showAllProjects}
            className="flex flex-col items-center font-bold px-16 py-2 text-center w-1/4 cursor-pointer"
          >
            All
            {all === true ? (
              <Underline hidden={false} />
            ) : (
              <Underline hidden={true} />
            )}
          </h2>

          <h2
            onClick={showDesignProjects}
            className="flex flex-col items-center font-bold px-16 py-2 text-center w-1/4 cursor-pointer"
          >
            Designs
            {design === true ? (
              <Underline hidden={false} />
            ) : (
              <Underline hidden={true} />
            )}
          </h2>

          <h2
            onClick={showWebProjects}
            className="flex flex-col items-center font-bold px-16 py-2 text-center w-1/4 cursor-pointer"
          >
            Websites
            {website === true ? (
              <Underline hidden={false} />
            ) : (
              <Underline hidden={true} />
            )}
          </h2>
        </div>

        <div
          className="all flex flex-col gap-4 justify-center sm:items-center flex-wrap md:flex-row"
          data-aos="fade-up"
        >
          {projs.map((project, i) => {
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
                        className="font-bold text-white"
                        style={{ maxWidth: "250px", fontSize: "12px" }}
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
                            <img src={url} alt="img" width={"15px"} />
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
