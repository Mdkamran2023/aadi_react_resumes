import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "A dedicated and technically adept fresher proficient in Java, JavaScript, and Front-end technologies like HTML, CSS, React, and Redux. Seeking opportunities in internships or software roles to apply expertise, with a strong enthusiasm for contributing to projects encompassing backend development utilizing Node.js, MySQL, and MongoDB.";

const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "React",
  "Redux",
  "NodeJs",
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience, I continually look for new and better ways to make tech accessible to all.";

const About = () => {
  return (
    <section className="padding" id="about" style={{ position: "relative", padding: "4rem 0"}}>
      <img
        className="background"
        src={image}
        alt={imageAltText}
        style={{ width: "100%", height: "auto", objectFit: "cover", position: "absolute", top: 0, left: 0, zIndex: -1 }}
      />
      <div
        style={{
          backgroundColor: "white",
          width: "90%",
          maxWidth: "800px",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2>About Myself</h2>
        <p style={{ fontSize: "1.25rem", margin: "1rem 0" }}>{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            padding: 0,
            listStyleType: "none",
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill} style={{ marginBottom: "0.5rem" }}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
