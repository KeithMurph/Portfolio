import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="container">
        <h1 className="top-title text-center text-dark">Contact Me</h1>
        <br></br>
        <br></br>
        <h1 className="text-center text-light">
          Resume
          <a
            class="col-md-4"
            href="https://drive.google.com/file/d/1c9iIf4K0BGEjDXUtuxTh7YF-sad5sjD9/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/bubbles/100/000000/resume.png"
              alt="resume"
            />
          </a>
        </h1>
        <h1 className="text-center text-light">
          GitHub
          <a
            href="https://github.com/KeithMurph"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/bubbles/100/000000/github.png"
              alt="github"
            />
          </a>
          /KeithMurph
        </h1>

        <h1 className="text-center text-light">
          LinkedIn
          <a
            class="col-md-4"
            href="https://www.linkedin.com/in/keithmurph/"
            target="_blank"
            rel="noreferrer"
          >
           
            <img
              src="https://img.icons8.com/bubbles/100/000000/linkedin.png"
              alt="linkedIn"
            />
          </a>
          /in/keithmurph
        </h1>

        <h1 className="text-center text-light">
          Email
          <a
            class="col-md-4"
            href="mailto: keithmurphy.dev@gmail.com"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/bubbles/100/000000/email--v1.png"
              alt="email"
            />
          </a>
          keithmurphy.dev@gmail.com{" "}
        </h1>
      </div>
      <div></div>
    </div>
  );
}
