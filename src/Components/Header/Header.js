import { Box, Button, Typography } from "@mui/material";
import React from "react";
import logo from "../Assets/Cb logo.jpg";
import chitreshResume from "../Resume/Chitresh Babu.pdf";

export const Header = () => {
  return (
    <Box>
      <Box
        id="header"
        sx={styles.headerContainer}
      >
        <Box sx={styles.logoTitle}>
          <img
            style={{ width: "50px" }}
            src={logo}
            alt="titlelogo"
          />
        </Box>

        <Box sx={styles.headerTitles}>
          <Button
            variant="filled"
            sx={styles.headerBtn}
          >
            <Typography
              variant="p"
              sx={styles.fonts}
            >
              Home
            </Typography>
          </Button>
          <Button
            sx={styles.headerBtn}
            variant="filled"
            href="#aboutMe"
          >
            <Typography
              variant="p"
              sx={styles.fonts}
            >
              About Me
            </Typography>
          </Button>
          <Button
            sx={styles.headerBtn}
            variant="filled"
            href="#portFolio"
          >
            <Typography
              variant="p"
              sx={styles.fonts}
            >
              Portfolio
            </Typography>
          </Button>
          <Button
            sx={styles.headerBtn}
            href="#skills"
            variant="filled"
          >
            <Typography
              variant="p"
              sx={styles.fonts}
            >
              Skills
            </Typography>
          </Button>
          <Button
            sx={styles.headerBtn}
            href="#contact"
            variant="filled"
          >
            <Typography
              variant="p"
              sx={styles.fonts}
            >
              Contact Info
            </Typography>
          </Button>

          <Button
            sx={styles.headerBtn}
            href="#downloadcv"
            variant="filled"
            type="submit"
          >
            <Typography
              variant="p"
              sx={styles.fonts}
            >
              <a
                href={chitreshResume}
                download="Chitresh Babu.pdf"
                style={{
                  textDecoration: "none",
                  color: "white",
                  "&:hover": { color: "#08151c" },
                }}
              >
                Download CV
              </a>
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  headerContainer: {
    paddingLeft: "20px",
    height: "60px",
    backdropFilter: "blur(8px)",
    textAlign: "left",
    display: "flex",
    paddingRight: "20px",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "100",
    justifyContent: "space-between",
    "@media (max-width:414px)": {
      display: "flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "space-even",
      flexDirection: "column",
      padding: "0",
      margin: "0",
      top: "0",
      bottom: "0",
      height: "50px",
    },
  },
  logoTitle: {
    display: "flex",
    alignItems: "left",
    justifyContent: "space-between",
    marginTop: "2px",
    "@media (max-width:360px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "@media (max-width:414px)": {
      display: "block",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      marginTop: "10px",
    },
  },
  headerTitles: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    animationName: "rollIn infinite",
    "@media (max-width:360px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "-225px",
    },
    "@media (max-width:414px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      marginTop: "50px",
    },
    "@keyframes animate": {
      "0%": { transform: "translateX(-100%)", opacity: 0 },
      "100%": { transform: "translateX(0)", opacity: 1 },
    },
  },
  headerBtn: {
    bgcolor: "#08151c",
    color: "white",
    fontFamily: "poppins",
    transition: "2s ease-in-out",
    ":hover": {
      fontFamily: "poppins",
      textDecoration: "underline",
      transition: "2s ease-in-out",
    },
  },
  fonts: {
    fontFamily: "Poppins",
    animation: "animate 2s ease-in-out",
    "@media(max-width:360px)": {
      fontSize: "small",
    },
    "@media(max-width:414px)": {
      fontSize: "small",
    },
  },
  header: {
    animation: "myAnimation 2s ease-in-out",
    "@keyframes animate": {
      "0%": { transform: "translateX(-100%)", opacity: 0 },
      "100%": { transform: "translateX(0)", opacity: 1 },
    },
  },
};
