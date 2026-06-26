import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mt-5 mb-5">People</h1>

        <div className="col-6 text-center">
          <img
            src="media/images/Ashish.jpeg"
            alt="Ashish Sharma"
            style={{
              borderRadius: "100%",
              width: "60%",
            }}
          />

          <h2>Ashish</h2>
          <p>Founder, CEO</p>
        </div>

        <div className="col-6 text-muted">
          <p>
            Ashish played a key role in developing the frontend of the
            MarketFlow project. He was responsible for designing and
            implementing responsive user interfaces using React.js, HTML,
            CSS, and JavaScript.
          </p>

          <p>
            He worked on creating reusable components, managing application
            routing, and ensuring a smooth and intuitive user experience
            across different devices.
          </p>

          <p>
            Ashish focused on creating a modern, user-friendly interface
            that closely resembles a real-world trading platform while
            following best practices in web development.
          </p>

          <p>
            Ashish is a passionate and dedicated frontend developer with a
            strong interest in creating modern, responsive, and user-friendly
            web applications.
          </p>

          <p>
            Ashish is continuously learning new technologies and is
            committed to writing clean, maintainable code while improving
            his problem-solving and development skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;