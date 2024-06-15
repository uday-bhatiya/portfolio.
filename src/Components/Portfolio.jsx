/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Service Provider",
    description:
      "Discover my service-provider platform: designed for seamless interaction and efficient service delivery.",
    url: "https://onlineserviceproviderbyuday.netlify.app/",
  },
  {
    title: "Education Website",
    description:
      "Explore my education website: designed for intuitive navigation and interactive learning experiences.",
    url: "https://github.com/uday-bhatiya/Education-Website",
  },
  {
    title: "React E-Commerce",
    description:
      "Discover my React e-commerce app: modern, intuitive, and designed for effortless shopping experiences.",
    url: "https://github.com/uday-bhatiya/react-ecommerce-app",
  },
  {
    title: "Blog App",
    description:
      "Discover my upcoming blog app built with the MERN stack! It will allow you to effortlessly create, publish, and share your thoughts with a seamless user interface and backend functionality. Stay tuned for more updates!",
    url: "https://github.com/uday-bhatiya/blog-app",
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
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
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
