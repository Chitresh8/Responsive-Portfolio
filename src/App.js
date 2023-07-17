import "./App.css";
import { Body } from "./Components/Body/Body";
import { Fragment } from "react";
import { Box, Button } from "@mui/material";
import { Header } from "./Components/Header/Header";
import { AnimatedComponent } from "./Components/MediaQueries/AnimatedComponent";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import { useIntersectionObserver } from "@uidotdev/usehooks";

function App() {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  return (
    <Fragment>
      <Box sx={styles.app}>
        <Header />
        <Body />
        <AnimatedComponent picTime={"3s"}>
          <Box sx={styles.top}>
            <Box ref={ref}>
              {entry?.isIntersecting && (
                <Button href="#header">
                  <ArrowCircleUpOutlinedIcon
                    fontSize="large"
                    sx={{
                      color: "white",
                      transition: "0.5s ease-in-out",
                      animation: "animate 2s ease-in-out",
                      ":hover": {
                        border: "1px solid #08151c",
                        borderRadius: "5px",
                        boxShadow: "1px 1px 6px 7px rgb(255 255 255/ 47%)",
                        transition: "0.5s ease-in-out",
                        width: "50px",
                        backgroundColor: "white",
                        color: "black",
                      },
                      "@keyframes animate": {
                        "0%": { transform: "translateX(-100%)", opacity: 0 },
                        "100%": { transform: "translateX(0)", opacity: 1 },
                      },
                    }}
                  />
                </Button>
              )}
            </Box>
          </Box>
        </AnimatedComponent>
      </Box>
    </Fragment>
  );
}

export default App;

const styles = {
  app: {
    backgroundColor: "#08151c",
    color: "white",
    fontFamily: "Poppins",
  },
  top: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    bottom: "10px",
    right: "10px",
  },
};
