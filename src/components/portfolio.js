
import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Travelers Wish List",
    languages: "Javascript, Handlebars, CSS",
    packages: "dotenv, express, express-handlebars, express-session,handlebars, mysql2, node, sequelize, session.",
    image: "/img/travelerswishlist.png",
    description: "Travelers Wish List is an app for people who need structure in their lives and want to plan out their next vacation! Travelers Wish List makes this easier than ever, by preparing all tasks and links all in one place.",
    repo: "https://github.com/JCLOS305/Travelers-Wish-List",
    live: "https://fierce-cove-76693.herokuapp.com/",
  },
  {
    id: 1,
    title: "Whine Dine",
    languages: "CSS, HTML, JavaScript.",
    packages: ""
    image: "/img/whinedine.png",
    description: "Whine? Dine. is an application designed to help “undecidable millennials” come to a conclusion on what’s for dinner. The app uses API’s to randomly generate dinner combos for users and helps you search for drink and food recipes by keywords!",
    repo: "https://github.com/JCLOS305/whine-dine",
    live: "https://fraancellaa.github.io/whine-dine/",
  },
  {
    id: 2,
    title: "",
    languages: "",
    packages: "",
    image: "",
    description: "",
    repo: "",
    live: "",
  },
  {
    id: 3,
    title: "",
    languages: "",
    packages: "",
    image: "",
    description: "",
    repo: "",
    live: "",
  },
  {
    id: 4,
    title: "",
    languages: "",
    packages: "",
    image: "",
    description: "",
    repo: "",
    live: "",
  },
  {
    id: 5,
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