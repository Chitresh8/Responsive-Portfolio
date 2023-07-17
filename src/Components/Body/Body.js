import React, { useState } from "react";
import { AboutMe } from "./AboutMe/AboutMe";
import { Box, Button, Typography } from "@mui/material";
import { Portfolio } from "./Portfolio/Portfolio";
import { ContactInfo } from "../ContactInfo/ContactInfo";
import { AnimatedComponent } from "../MediaQueries/AnimatedComponent";
import { Projects } from "./Projects/Projects";
import { EducationalHistory } from "./Portfolio/EducationalHistory/EducationalHistory";
import { WorkingHistory } from "./Portfolio/WorkingHistory/WorkingHistory";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { Skills } from "./Skills/Skills";

export const Body = () => {
  const [workClick, setWorkClick] = useState(true);
  const [educationClick, setEducationClick] = useState(false);
  const [projectsClick, setProjectsClick] = useState(false);

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  return (
    <AnimatedComponent>
      <Box>
        <AboutMe />
        <Portfolio />
        <AnimatedComponent picTime={"3s"}>
          <Box sx={styles.portfolioBox}>
            <Box sx={styles.tlComponents}>
              <Typography
                variant="p"
                onClick={() => {
                  setWorkClick(true);
                  setEducationClick(false);
                  setProjectsClick(false);
                  console.log("test");
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#08151c",
                    color: "white",
                    border: "1px solid white",
                    fontFamily: "poppins",
                    letterSpacing: "0px",
                    transition: "2s ease-in-out",
                    width: "200px",
                    ":hover": {
                      bgcolor: "white",
                      color: "#08151c",
                      fontFamily: "poppins",
                      border: "1px solid #08151c",
                      boxShadow: "1px 1px 6px 7px rgb(255 255 255/ 47%)",
                      letterSpacing: "5px",
                      transition: "2s ease-in-out",
                    },
                  }}
                >
                  Working History
                </Button>
              </Typography>
              <Typography
                variant="p"
                onClick={() => {
                  setEducationClick(true);
                  setWorkClick(false);
                  setProjectsClick(false);

                  console.log("test");
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#08151c",
                    color: "white",
                    border: "1px solid white",
                    fontFamily: "poppins",
                    letterSpacing: "0px",
                    transition: "2s ease-in-out",
                    width: "200px",
                    ":hover": {
                      bgcolor: "white",
                      color: "#08151c",
                      fontFamily: "poppins",
                      border: "1px solid #08151c",
                      boxShadow: "1px 1px 6px 7px rgb(255 255 255/ 47%)",
                      letterSpacing: "5px",
                      transition: "2s ease-in-out",
                    },
                    "@media (max-width:414px)": {
                      marginTop: "15px",
                      marginBottom: "15px",
                    },
                  }}
                >
                  Educational History
                </Button>
              </Typography>
              <Typography
                variant="p"
                onClick={() => {
                  setProjectsClick(true);
                  setEducationClick(false);
                  setWorkClick(false);

                  console.log("test");
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#08151c",
                    color: "white",
                    border: "1px solid white",
                    fontFamily: "poppins",
                    letterSpacing: "0px",
                    transition: "2s ease-in-out",
                    width: "200px",
                    ":hover": {
                      bgcolor: "white",
                      color: "#08151c",
                      fontFamily: "poppins",
                      border: "1px solid #08151c",
                      boxShadow: "1px 1px 6px 7px rgb(255 255 255/ 47%)",
                      letterSpacing: "5px",
                      transition: "2s ease-in-out",
                    },
                  }}
                >
                  Project History
                </Button>
              </Typography>
            </Box>
            <Box>
              {workClick ? <WorkingHistory /> : null}
              {educationClick ? <EducationalHistory /> : null}
              {projectsClick ? <Projects /> : null}
            </Box>
          </Box>
        </AnimatedComponent>
        <Skills />
        <ContactInfo />
      </Box>
    </AnimatedComponent>
  );
};

const styles = {
  portfolioBox: {
    marginBottom: "0px",
    width: "100%",

    "@media (max-width:414px)": {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
  },
  tlComponents: {
    marginLeft: "0px",
    marginRight: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "5px",
    marginTop: "80px",
    textDecoration: "underline",
    cursor: "pointer",

    "@media (max-width:414px)": {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      flexDirection: "column",
      margin: "auto",
    },
  },
};
