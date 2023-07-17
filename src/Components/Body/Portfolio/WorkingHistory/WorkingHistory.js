import { Box } from "@mui/material";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { workingHistoryData } from "./WorkingHistoryData";
import { AnimatedComponent } from "../../../MediaQueries/AnimatedComponent";
import "./WorkingHistory.css";

export const WorkingHistory = () => {
  return (
    <AnimatedComponent>
      <Box>
        <VerticalTimeline>
          {workingHistoryData.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";

            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                key={element.id}
                date={element.date}
                dateClassName="date"
                iconStyle={{ backgroundColor: "rgb(27,27,46)" }}
                icon={element.icon}
              >
                <h2 className="vertical-timeline-element-title">
                  {element.title}
                </h2>
                <h3 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h3>
                <p>{element.branch}</p>
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
                <h3 className="vertical-timeline-element-subtitle">
                  {element.year}
                </h3>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </Box>
    </AnimatedComponent>
  );
};
