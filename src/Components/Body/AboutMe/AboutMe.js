import { Box, Button, Typography } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import pic from "../../Assets/RUntitled design.png";
import { AnimatedComponent } from "../../MediaQueries/AnimatedComponent";
import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <AnimatedComponent>
      <Box
        id="aboutMe"
        sx={styles.aboutMeContainer}
      >
        <Box sx={styles.aboutSection}>
          <Box sx={styles.aboutMe}>
            <Typography variant="h3">About Me</Typography>
          </Box>
          <AnimatedComponent picTime={"3s"}>
            <Box sx={styles.para}>
              <Typography
                variant="p"
                sx={styles.paragraph}
              >
                Hello,I'm{" "}
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "30px",
                  }}
                >
                  Chitresh
                </span>
                . I have 4+ Years Experience in developing user-friendly and
                responsive web applications. Committed to staying up-to-date
                with the latest industry trends and continuously improving
                skills to provide exceptional user experiences. I'm responsible
                for designing and implementing user interfaces (UIs) and UI
                components using React, a Front End JavaScript library.
              </Typography>
            </Box>

            <Box sx={styles.icons}>
              <Button
                variant="filled"
                href="#contact"
              >
                <EmailIcon sx={styles.aboutBtn} />
              </Button>
              <Button
                variant="filled"
                href="#contact"
              >
                <GitHubIcon sx={styles.aboutBtn} />
              </Button>
              <Button
                variant="filled"
                href="#contact"
              >
                <LinkedInIcon sx={styles.aboutBtn} />
              </Button>
            </Box>
          </AnimatedComponent>
        </Box>

        <AnimatedComponent picTime={"3s"}>
          <Box sx={styles.square}>
            <Box sx={styles.image}>
              <img
                className="images"
                src={pic}
                alt="profilepicture"
              />
            </Box>
          </Box>
        </AnimatedComponent>
      </Box>
    </AnimatedComponent>
  );
};

const styles = {
  aboutMeContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "5px",
    marginTop: "50px",
    "@media (max-width:360px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    "@media (max-width:414px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
  },
  aboutSection: {
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
    flexDirection: "row",
    textAlign: "left",
    flexWrap: "wrap",
    margin: "5px",
    marginBottom: "5px",
    "@media (max-width:360px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "300px",
    },
    "@media (max-width:414px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "300px",
      flexDirection: "column",
    },
  },
  aboutBtn: {
    bgcolor: "#08151c",
    color: "white",
    fontFamily: "poppins",
    letterSpacing: "0px",
    transition: "0.5s ease-in-out",
    borderRadius: "5px",
    width: "30px",
    ":hover": {
      bgcolor: "white",
      color: "#08151c",
      fontFamily: "poppins",
      boxShadow: "1px 1px 6px 7px rgb(255 255 255/ 47%)",
      letterSpacing: "5px",
      transition: "0.5s ease-in-out",
      borderRadius: "5px",
    },
  },
  paragraph: {
    "@media (max-width:320px)": {
      fontSize: "small",
      width: "270px",
      letterSpacing: "initial",
    },
    "@media (max-width:360px)": {
      fontSize: "small",
      width: "300px",
      letterSpacing: "initial",
    },
  },
  aboutMe: {
    textTransform: "uppercase",
    "@media (max-width:360px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "10px",
      marginRight: "-25px",
      fontSize: "30px",
    },
    "@media (max-width:414px)": {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      flexDirection: "column",
      marginRight: "25px",
    },
  },
  para: {
    wordSpacing: "10px",
    letterSpacing: "5px",
    margin: "20px 5px 0 5px",
    lineHeight: "1cm",
    "@media (max-width:320px)": {
      width: "270px",
    },
    "@media (max-width:360px)": {
      width: "300px",
    },
    "@media (max-width:414px)": {
      display: "flex",
      textAlign: "justify",
      justifyContent: "center",
      flexDirection: "column",
      padding: "3px",
    },
  },
  icons: {
    marginTop: "30px",
    marginLeft: "-16px",
    padding: "0",

    "@media (max-width:360px)": {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      flexDirection: "row",
      marginRight: "36px",
    },

    "@media (max-width:414px)": {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      flexDirection: "row",
      margin: "10px",
    },
  },

  image: {
    borderRadius: "27px",
    width: "243px",
    transition: "smooth",
    "@media (max-width:414px)": {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
  },
};
