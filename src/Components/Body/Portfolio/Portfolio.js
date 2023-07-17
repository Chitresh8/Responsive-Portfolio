import { Box, Typography } from "@mui/material";
import React from "react";
import { AnimatedComponent } from "../../MediaQueries/AnimatedComponent";

export const Portfolio = () => {
  return (
    <AnimatedComponent>
      <Box id="portFolio">
        <Typography
          variant="h3"
          sx={styles.portfolio}
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
