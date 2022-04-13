import React from "react";

export default function About() {
  return (
    <div className="name">
      
      <header className="aboutHead"> 
      <h1>KEITH MURPHY</h1>
      </header>
      <div className="aboutMe">
        
        <br></br>

        <img
          id="avatar"
          src="https://i.postimg.cc/5ymYqTDL/profile-Pic.jpg"
          class="rounded mx-auto d-block"
          alt="avatar"
        />
        <br></br>

        <div>
          <h1 class="contact">⚫FULL-STACK WEB DEVELOPER⚫<br></br>
            Creative mind ready to utilize my passion for tech and creating apps
            to follow a dream career.<br></br>
            Recent graduate of the University of Washington Full-Stack Web Development Bootcamp.
          </h1>

          <h1 className="contact">
            💻 Languages
            <br />
            <img
              src="https://img.icons8.com/color/48/000000/javascript--v1.png"
              alt="js"
            />{" "}
            JavaScript
            <img
              src="https://img.icons8.com/color/48/000000/css3.png"
              alt="css"
            />{" "}
            CSS
            <img
              src="https://img.icons8.com/color/48/000000/html-5--v1.png"
              alt="html"
            />{" "}
            HTML
          </h1>

          <h1 className="contact">
            ⌨️ Technical Skills
            <br></br>
            <img
              src="https://img.icons8.com/color/48/000000/nodejs.png"
              alt="node"
            />
            NodeJs
            <img
              src="https://img.icons8.com/ios-glyphs/60/000000/react.png"
              alt="react"
            />
            ReactJs
            <img
              src="https://img.icons8.com/color/48/000000/mongodb.png"
              alt="mongo"
            />
            MongoDB
            <img
              src="https://img.icons8.com/ios-filled/50/000000/mysql.png"
              alt="mysql"
            />
            MySQL
            <img
              src="https://img.icons8.com/color/48/000000/bootstrap.png"
              alt="bootstrap"
            />
            Bootstrap
            <img
              src="https://img.icons8.com/ios-filled/50/000000/git.png"
              alt="git"
            />
            Git
          </h1>

          <h3 className="text-center">
            <p> keithmurphy.dev@gmail.com</p>
          </h3>
        </div>
      </div>
      <div></div>
    </div>
  );
}
