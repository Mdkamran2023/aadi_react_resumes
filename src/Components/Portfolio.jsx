import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Food Fiesta : A Partial Clone of the renowned food delivery Swiggy App. ",
    description:
      "The Swiggy and Github APIs to fetch and display real-time data, enhancing the overall user experience. Achieved a test coverage of approximately 95 percent, ensuring the majority of the codebase was effectively validated for correctness ",
    url: "https://food-fiesta-5c31e.firebaseapp.com/",
  },
  {
    title: "Netflix GPT : A Netflix clone enhanced with GPT-3 powered movie suggestions. ",
    description:
      "• Built using React and Tailwind CSS for a modern and responsive user interface. • Integrated with Firebase for backend services, providing robust and scalable solutions.",
    url: "https://netflixgpt-9484f.web.app/",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://brave-hill-0397a8b00.5.azurestaticapps.net/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "slideInLeft 1s ease-out 0s 1",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
