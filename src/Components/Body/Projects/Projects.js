import React from "react";
import "./Projects.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { projectsData } from "./ProjectsData";
import { Box } from "@mui/material";
import { AnimatedComponent } from "../../MediaQueries/AnimatedComponent";

export const Projects = () => {
  return (
    <Box>
      <AnimatedComponent>
        <VerticalTimeline>
          {projectsData.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";

            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={{ backgroundColor: "rgb(27,27,46)" }}
                icon={element.icon}
              >
                <img
                  style={{
                    width: "200px",
                    objectFit: "cover",
                    marginBottom: "12px",
                    borderRadius: "10px",
                    "@media (max-width:360px)": {
                      objectFit: "cover",
                      marginBottom: "12px",
                      borderRadius: "10px",
                    },
                  }}
                  src={element.image}
                  alt="image"
                />
                <img
                  style={{ display: "flex", height: "30px" }}
                  src={element.images}
                  alt="images"
                />

                <h2 className="vertical-timeline-element-title">
                  {element.title}
                </h2>
                <h3 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h3>
                <p id="description">{element.description}</p>
                {showButton && (
                  <a
                    className={`button ${
                      isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                    href="/"
                  >
                    {element.buttonText}
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </AnimatedComponent>
    </Box>
  );
};
