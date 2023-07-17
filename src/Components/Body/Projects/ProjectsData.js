import AccountTreeIcon from "@mui/icons-material/AccountTree";
import fbImage from "../../Assets/Facebook Clone.png";
import dlfImage from "../../Assets/DLFVen.png";
import heImage from "../../Assets/HotWheels.png";
import resume from "../../Assets/Resume Portfolio.png";
import imageOne from "../../Assets/HCJR.png";
import imageTwo from "../../Assets/HCJRR.png";

export const projectsData = [
  {
    id: 1,
    title: "Facebook Clone Project",
    location: "Social Media Network",
    image: fbImage,
    images: imageOne,
    description:
      "Facebook Clone Project is a Social Media Network which is populsr now a days.This is the Sample application which we can handle from Login to Home.",
    date: "Social Network",
    icon: <AccountTreeIcon sx={{ color: "white" }} />,
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
  },
  {
    id: 3,
    title: "HE Project",
    location: "Mecnaincal City",
    image: heImage,
    images: imageOne,
    description:
      "HE- Hot wheels storE is a project which a customer will choose the type of vehicle to the unknown places while Tourism.",
    date: "2,3 & 4 Wheeler Crew",
    icon: <AccountTreeIcon sx={{ color: "white" }} />,
  },
  {
    id: 4,
    title: "Resume Portfolio",
    location: "Responnsive Website",
    image: resume,
    images: imageTwo,
    description:
      "This is the Website which consists of Biodata to look my Work Experience for hiring a Job.",
    date: "Responsive Resume",
    icon: <AccountTreeIcon sx={{ color: "white" }} />,
  },
  // {
  //   id: 5,
  //   title: "Hawking College",
  //   location: "Skystead, Craonia",
  //   description:
  //     "College - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
  //   buttonText: "College Projects",
  //   date: "2007 - 2011",
  //   icon: "school",
  // },
  // {
  //   id: 6,
  //   title: "Marble Hills Grammar School",
  //   location: "Dragontail, Ascana",
  //   description:
  //     "Highschool - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
  //   date: "2003 - 2007",
  //   icon: "school",
  // },
];
