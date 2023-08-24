import React from "react";
import { Button } from "@mui/material";

export const Resume = () => {
  const resumeUrl = "Chitresh Babu.pdf";

  return (
    <Button
      component="a"
      href={resumeUrl}
      download
      variant="contained"
      color="primary"
    >
      Download Resume
    </Button>
  );
};
