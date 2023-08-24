import { useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { AnimatedComponent } from "../MediaQueries/AnimatedComponent";
import "./ContactInfo.css";

export const ContactInfo = () => {
  const cRef = useRef("");
  useEffect(() => {
    const scrollHandler = () => {
      const value = cRef.current;
      const top = value.getBoundingClientRect().top;
      const height = window.innerHeight;
      console.log("top", top);
      console.log("height", height);
      console.log("class", value.style.animation);

      if (top < height) {
        value.style.animation = "myAnimation 3s";
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <AnimatedComponent>
      <Box
        ref={cRef}
        id="contact"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          sx={styles.contactInfo}
        >
          Contact Info
        </Typography>
        <AnimatedComponent picTime={"3s"}>
          <Box
            sx={styles.contact}
            ref={cRef}
          >
            <MailOutlineIcon /> Email :
            <Typography variant="p">chitreshbabu8@gmail.com</Typography>
            <CallIcon />
            Mobile No: <Typography variant="p">+91 7396723764</Typography>
            <GitHubIcon />
            GitHub : <Typography variant="p"> github.com/Chitresh8</Typography>
            <LinkedInIcon />
            LinkedIn :{" "}
            <Typography variant="p">chitreshbabu/linkedin</Typography>
          </Box>

          <AnimatedComponent picTime={"3s"}>
            <Box sx={styles.footerContent}>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={() => {
                  window.open("mailto:chitreshbabu8@gmail.com");
                }}
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
                  width: "150px",

                  ":hover": {
                    fontFamily: "poppins",
                    border: "1px solid #08151c",
                    boxShadow: "1px 1px 6px 7px rgb(255 255 255/ 47%)",
                    letterSpacing: "5px",
                    transition: "1s ease-in-out",
                    width: "150px",
                    backgroundColor: "white",
                    color: "black",
                    fontWeight: "bold",
                  },
                }}
              >
                Email
              </Button>
              <Button
                variant="contained"
                endIcon={<CallIcon />}
                onClick={() => {
                  window.open("tel:+91 7396723764");
                }}
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
                  width: "150px",

                  ":hover": {
                    fontFamily: "poppins",
                    border: "1px solid #08151c",
                    boxShadow: "1px 1px 6px 7px rgb(255 255 255/ 47%)",
                    letterSpacing: "5px",
                    transition: "1s ease-in-out",
                    width: "150px",
                    backgroundColor: "white",
                    color: "black",
                    fontWeight: "bold",
                  },
                }}
              >
                Call
              </Button>
            </Box>
          </AnimatedComponent>
        </AnimatedComponent>
      </Box>
    </AnimatedComponent>
  );
};

const styles = {
  contactInfo: {
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
    "@media(max-width:320px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "50px 37px 0px 37px",
      fontSize: "30px",
    },
    "@media(max-width:360px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "50px 37px 0px 37px",
      fontSize: "30px",
    },
    "@media (max-width:414px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  contact: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "20px",
    gap: "10px",
    animation: "animate 2s ease-in-out",

    "@keyframes animate": {
      "0%": { transform: "translateX(-100%)", opacity: 0 },
      "100%": { transform: "translateX(0)", opacity: 1 },
    },

    "@media(max-width:320px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "50px 37px 0px 37px",
      fontSize: "15px",
    },
  },
  footerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    height: "90px",
    marginTop: "10px",
    marginBottom: "50px",
    marginLeft: "5px",
    marginRight: "5px",
    gap: "20px",
    "@media(max-width:320px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      marginTop: "50px",
    },
    "@media (max-width:414px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
    },
  },
  mailBtn: {
    textDecoration: "none",
    color: "white",
    borderBottom: "none",
  },
};
