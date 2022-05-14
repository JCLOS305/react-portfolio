import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Full Stack Developer Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/jclos305" target="_blank" rel="noreferrer">
         Jeancarlos Mulet
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/jeancarlosmulet/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a href="https://www.xbox.com" target="_blank" rel="noreferrer">
            Xbox Online
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;