import React from "react";
import "./Projects.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { projectsData } from "./ProjectsData";
import { Box, Button } from "@mui/material";
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
                  alt={"projects"}
                />
                <img
                  style={{ display: "flex", height: "30px" }}
                  src={element.images}
                  alt={"projects"}
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
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "#08151c",
                      color: "white",
                      border: "1px solid white",
                      fontFamily: "poppins",
                      letterSpacing: "0px",
                      transition: "1s ease-in-out",
                      width: "90px",

                      ":hover": {
                        fontFamily: "poppins",
                        border: "1px solid #08151c",
                        boxShadow: "1px 1px 6px 7px rgb(255 255 255/ 47%)",
                        letterSpacing: "5px",
                        transition: "1s ease-in-out",
                        width: "90px",
                        backgroundColor: "white",
                        color: "black",
                        fontWeight: "bold",
                      },
                    }}
                  >
                    {element.buttonOne}
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "#08151c",
                      color: "white",
                      border: "1px solid white",
                      fontFamily: "poppins",
                      letterSpacing: "0px",
                      transition: "1s ease-in-out",
                      width: "90px",

                      ":hover": {
                        fontFamily: "poppins",
                        border: "1px solid #08151c",
                        boxShadow: "1px 1px 6px 7px rgb(255 255 255/ 47%)",
                        letterSpacing: "5px",
                        transition: "1s ease-in-out",
                        width: "90px",
                        backgroundColor: "white",
                        color: "black",
                        fontWeight: "bold",
                      },
                    }}
                  >
                    {element.buttonTwo}
                  </Button>
                </Box>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </AnimatedComponent>
    </Box>
  );
};
