import { useEffect, useRef } from "react";
import htmllogo from "../../Assets/Html.png";
import css3logo from "../../Assets/Css.png";
import jslogo from "../../Assets/Js.png";
import reactlogo from "../../Assets/React.png";
import { Box, Typography } from "@mui/material";

export const Skills = () => {
  const hRef = useRef("");
  useEffect(() => {
    const scrollHandler = () => {
      const value = hRef.current;
      const top = value.getBoundingClientRect().top;
      const height = window.innerHeight;
      console.log("top", top);
      console.log("height", height);
      console.log("class", value.style.animation);

      if (top < height) {
        value.style.animation = "myAnimation 2s";
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <Box
      id="skills"
      sx={styles.skillsprogressbar}
      ref={hRef}
    >
      <Typography variant="h3">SKILLS</Typography>
      <Box sx={styles.skills}>
        <Typography variant="h6">HTML</Typography>
        <Box sx={styles.flex}>
          <Box sx={styles.logo}>
            <img
              style={{ width: "30px" }}
              src={htmllogo}
              alt=""
            />
          </Box>
          <Box sx={styles.progressbar}>
            <Box sx={styles.htmlprogress}></Box>
          </Box>
        </Box>
        <Typography variant="h6">CSS</Typography>
        <Box sx={styles.flex}>
          <Box sx={styles.logo}>
            <img
              style={{ width: "30px" }}
              src={css3logo}
              alt=""
            />
          </Box>
          <Box sx={styles.progressbar}>
            <Box sx={styles.cssprogress}></Box>
          </Box>
        </Box>
        <Typography variant="h6">JS</Typography>
        <Box sx={styles.flex}>
          <Box sx={styles.logo}>
            <img
              style={{ width: "30px" }}
              src={jslogo}
              alt=""
            />
          </Box>
          <Box sx={styles.progressbar}>
            <Box sx={styles.jsprogress}></Box>
          </Box>
        </Box>
        <Typography variant="h6">REACT JS</Typography>
        <Box sx={styles.flex}>
          <Box sx={styles.logo}>
            <img
              style={{ width: "30px" }}
              src={reactlogo}
              alt=""
            />
          </Box>
          <Box sx={styles.progressbar}>
            <Box sx={styles.reactprogress}></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  skillsprogressbar: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#08151c",
  },
  skills: {
    width: "80%",
  },
  flex: { display: "flex", alignItems: "center", gap: "5px" },
  logo: {
    width: "30px",
  },
  progressbar: {
    width: "800px",
    height: "4px",
    borderRadius: "5px",
    background: "rgb(214, 214, 214)",
    animation: "myAnimation 5s ease-in-out",
    "@keyframes myAnimation": {
      "0%": {
        transform: "translateX(-100%)",
        opacity: "0",
      },
      "100%": {
        transform: "translateX(0)",
        opacity: "1",
      },
    },
  },
  htmlprogress: {
    width: "0%",
    height: "4px",
    borderRadius: "5px",
    background: "rgb(251, 128, 40)",
    animation: "html 1s linear forwards",
    "@keyframes html": {
      "100%": {
        width: "85%",
      },
    },
  },
  cssprogress: {
    width: "0%",
    height: "4px",
    borderRadius: "5px",
    background: "rgb(36, 101, 241)",
    animation: "css 1s linear forwards",
    "@keyframes css": {
      "100%": {
        width: "85%",
      },
    },
  },
  jsprogress: {
    width: "0%",
    height: "4px",
    borderRadius: "5px",
    background: "rgb(212, 184, 48)",
    animation: "js 1s linear forwards",
    "@keyframes js": {
      "100%": {
        width: "70%",
      },
    },
  },
  reactprogress: {
    width: "0%",
    height: "4px",
    borderRadius: "5px",
    background: "rgb(55, 130, 158)",
    animation: "react 1s linear forwards",
    "@keyframes react": {
      "100%": {
        width: "70%",
      },
    },
  },
};
