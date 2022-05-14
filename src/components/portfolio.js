
import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "",
    languages: "",
    packages: "",
    image: "",
    description: "",
    repo: "",
    live: "",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;