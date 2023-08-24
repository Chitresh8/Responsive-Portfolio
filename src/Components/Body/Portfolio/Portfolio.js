import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import React from "react";
import { AnimatedComponent } from "../../MediaQueries/AnimatedComponent";

export const Portfolio = () => {
  const portfolioRef = useRef("");
  useEffect(() => {
    const scrollHandler = () => {
      const value = portfolioRef.current;
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
    <AnimatedComponent>
      <Box id="portFolio">
        <Typography
          variant="h3"
          sx={styles.portfolio}
          ref={portfolioRef}
        >
          Portfolio
        </Typography>
      </Box>
    </AnimatedComponent>
  );
};

const styles = {
  portfolio: {
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",
  },
  "@media(max-width:320px)": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
  },
  "@media(max-width:360px)": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
  },
};
