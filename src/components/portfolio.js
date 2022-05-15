
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
    packages: "none",
    image: "/img/whinedine.png",
    description: "Whine? Dine. is an application designed to help “undecidable millennials” come to a conclusion on what’s for dinner. The app uses API’s to randomly generate dinner combos for users and helps you search for drink and food recipes by keywords!",
    repo: "https://github.com/JCLOS305/whine-dine",
    live: "https://fraancellaa.github.io/whine-dine/",
  },
  {
    id: 2,
    title: "Note Taker",
    languages: "CSS, HTML, JavaScript.",
    packages: "express, jest, node.",
    image: "/img/notetaker.png",
    description: "Note Taker helps any user by adding or removing notes and storing them on a server.",
    repo: "https://github.com/JCLOS305/Note-Taker",
    live: "https://sleepy-cove-14241.herokuapp.com/",
  },
  {
    id: 3,
    title: "README Generator",
    languages: "Javascript",
    packages: "inquirer",
    image: "/img/readmegenerator.png",
    description: "Readme Generator is an application used to quickly and effectively generate a professional README file",
    repo: "https://github.com/JCLOS305/README-generator",
    live: "runs in terminal",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    languages: "Javascript, HTML, CSS,",
    packages: "none",
    image: "/img/weatherdashboard.png",
    description:"Weather dashboard that runs in the browser and feature dynamically updated HTML and CSS.",
    repo: "https://github.com/JCLOS305/Weather-Dashboard",
    live: "https://jclos305.github.io/Weather-Dashboard/",
  },
  {
    id: 5,
    title: "Work Day Scheduler",
    languages: "Javascript, HTML, CSS.",
    packages: "none",
    image: "/img/workday.png",
    description: "a simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
    repo: "https://github.com/JCLOS305/Work-Day-Scheduler",
    live: "https://jclos305.github.io/Work-Day-Scheduler",
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