import React from "react";
import { Box } from "@mui/material";

export const AnimatedComponent = ({ children, picTime }) => {
  return (
    <Box
      sx={{
        animation: `myAnimation ${picTime || "2s"} ease-in-out`,
        "@keyframes myAnimation": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
      }}
    >
      {children}
    </Box>
  );
};
