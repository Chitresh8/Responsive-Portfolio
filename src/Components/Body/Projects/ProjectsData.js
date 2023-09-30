import AccountTreeIcon from "@mui/icons-material/AccountTree";
import fbImage from "../../Assets/Facebook Clone.png";
import dlfImage from "../../Assets/DLFVen.png";
import heImage from "../../Assets/HotWheels.png";
import resume from "../../Assets/Resume Portfolio.png";
import imageOne from "../../Assets/HCJR.png";
import imageTwo from "../../Assets/HCJRR.png";
import { Typography } from "@mui/material";

export const projectsData = [
  {
    id: 1,
    title: "Facebook Clone Project",
    location: "Social Media Network",
    image: fbImage,
    images: imageOne,
    description:
      "Facebook Clone Project is a Social Media Network which is popular now a days.This is the Sample application which we can handle from Login to Home.",
    date: "Social Network",
    icon: <AccountTreeIcon sx={{ color: "white" }} />,
    buttonOne: (
      <Typography
        variant="p"
        onClick={() => {
          window.open("https://github.com/Chitresh8/Facebook-clone-Project");
        }}
      >
        CODE
      </Typography>
    ),
    buttonTwo: (
      <Typography
        variant="p"
        onClick={() => {
          window.open("https://myfirstdeploy-ae057.web.app/");
        }}
      >
        DEMO
      </Typography>
    ),
  },
  {
    id: 2,
    title: "DLF Ventures Project",
    location: "Logistics & Real Estate Links",
    image: dlfImage,
    images: imageTwo,
    description:
      "DLF Ventures is a website for the Warehouse which we can assessing the Technical documentations from the DLF Association members.",
    date: "Logistics & Real Estate Sector",
    icon: <AccountTreeIcon sx={{ color: "white" }} />,
    buttonOne: (
      <Typography
        variant="p"
        onClick={() => {
          window.open("https://github.com/Chitresh8/DLF_Ventures");
        }}
      >
        CODE
      </Typography>
    ),
    buttonTwo: (
      <Typography
        variant="p"
        onClick={() => {
          window.open("https://myseconddeploy.web.app/");
        }}
      >
        DEMO
      </Typography>
    ),
  },
  {
    id: 3,
    title: "HE Project",
    location: "Riders City",
    image: heImage,
    images: imageOne,
    description:
      "HE- Hot wheels storE is a project which a customer will choose the type of vehicle to the unknown places while Tourism.",
    date: "2,3 & 4 Wheeler Crew",
    icon: <AccountTreeIcon sx={{ color: "white" }} />,
    buttonOne: (
      <Typography
        variant="p"
        onClick={() => {
          window.open("https://github.com/Chitresh8/H_E_Project");
        }}
      >
        CODE
      </Typography>
    ),
    buttonTwo: (
      <Typography
        variant="p"
        onClick={() => {
          window.open("https://mythirdproject-7c690.web.app");
        }}
      >
        DEMO
      </Typography>
    ),
  },
  {
    id: 4,
    title: "Resume Portfolio",
    location: "Responsive Website",
    image: resume,
    images: imageTwo,
    description:
      "This is the Website which consists of Biodata to look my Work Experience for hiring a Job.",
    date: "Responsive Resume",
    icon: <AccountTreeIcon sx={{ color: "white" }} />,
    buttonOne: (
      <Typography
        variant="p"
        onClick={() => {
          window.open("https://github.com/Chitresh8/Responsive-Portfolio");
        }}
      >
        CODE
      </Typography>
    ),
    buttonTwo: <Typography variant="p">LIVE</Typography>,
  },
];
