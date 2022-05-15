// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Jeancarlos Mulet"/>
      <p className="content is-italic mt-4">
      just trying to get by, one line of code at a time. 
      </p>
      <p className="content">
      by the time you are reading this I have grauduated from The University of Miami as a Full Stack Developer.
      </p>
    </div>
  );
}

export default About;