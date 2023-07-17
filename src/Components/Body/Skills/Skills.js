import React from "react";
import classes from "./Skills.module.css";
import htmllogo from "../../Assets/Html.png";
import css3logo from "../../Assets/Css.png";
import jslogo from "../../Assets/Js.png";
import reactlogo from "../../Assets/React.png";
import { useIntersectionObserver } from "@uidotdev/usehooks";

export const Skills = () => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  return (
    <div
      id="skills"
      ref={ref}
    >
      {entry?.isIntersecting && (
        <div
          id="skills"
          className={classes.skillsprogressbar}
        >
          <h3>SKILLS</h3>

          <div className={classes.skills}>
            <h2>HTML</h2>
            <div className={classes.flex}>
              <div className={classes.logo}>
                <img
                  src={htmllogo}
                  alt=""
                />
              </div>
              <div className={classes.progressbar}>
                <div className={classes.htmlprogress}></div>
              </div>
            </div>
            <h2>CSS</h2>
            <div className={classes.flex}>
              <div className={classes.logo}>
                <img
                  src={css3logo}
                  alt=""
                />
              </div>
              <div className={classes.progressbar}>
                <div className={classes.cssprogress}></div>
              </div>
            </div>
            <h2>JS</h2>
            <div className={classes.flex}>
              <div className={classes.logo}>
                <img
                  src={jslogo}
                  alt=""
                />
              </div>
              <div className={classes.progressbar}>
                <div className={classes.jsprogress}></div>
              </div>
            </div>
            <h2>REACT</h2>
            <div className={classes.flex}>
              <div className={classes.logo}>
                <img
                  src={reactlogo}
                  alt=""
                />
              </div>
              <div className={classes.progressbar}>
                <div className={classes.reactprogress}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
