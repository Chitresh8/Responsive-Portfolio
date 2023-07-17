import { Box, Button, Typography } from "@mui/material";
import React from "react";
import logo from "../Assets/Cb logo.jpg";
import { AnimatedComponent } from "../MediaQueries/AnimatedComponent";
import { useIntersectionObserver } from "@uidotdev/usehooks";

export const Header = () => {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `Chitresh Babu.pdf`;
    link.click();
  };

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  return (
    <AnimatedComponent>
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
          {/* <Button variant="filled">
            <Box ref={ref}>
              {entry?.isIntersecting && (
                <Typography
                  variant="p"
                  sx={styles.fonts}
                >
                  Home
                </Typography>
              )}
            </Box>
          </Button> */}
          <Button
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
            variant="filled"
            href="#portFolio"
          >
            <Box ref={ref}>
              {entry?.isIntersecting && (
                <Typography
                  variant="p"
                  sx={styles.fonts}
                >
                  Portfolio
                </Typography>
              )}
            </Box>
          </Button>
          <Button
            href="#skills"
            variant="filled"
          >
            <Box ref={ref}>
              {entry?.isIntersecting && (
                <Typography
                  variant="p"
                  sx={styles.fonts}
                >
                  Skills
                </Typography>
              )}
            </Box>
          </Button>
          <Button
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
            href="#downloadcv"
            variant="filled"
            type="submit"
          >
            <Box ref={ref}>
              {entry?.isIntersecting && (
                <Typography
                  variant="p"
                  sx={styles.fonts}
                  onClick={onDownload}
                >
                  Download CV
                </Typography>
              )}
            </Box>
          </Button>
        </Box>
      </Box>
    </AnimatedComponent>
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
};
