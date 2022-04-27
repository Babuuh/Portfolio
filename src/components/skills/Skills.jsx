import React, { useContext } from "react";
import "./Skills.css";
import Backend from "../../images/backend.png";
import Frontend from "../../images/frontend.jpg";
import Tester from "../../images/testing.png";
import Card from "../cards/Card";
import { motion } from "framer-motion";
import { themeContext } from "../../Context";
import Resume from "./Resume.pdf";

const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="skills">
      {/* left */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Skills</span>
        <span>
          Over the years I have acquired and perfected
          <br />
          various Skills and Technologies
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div
          className="blur s-blur1"
          style={{
            background: "abf1ff94",
          }}
        ></div>
      </div>

      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Backend}
            heading={"Backend Development"}
            details={"Backend Development using Django and Flask"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Frontend}
            heading={"Frontend Development"}
            details={"React, Html, css, Javascript, Materialui,Bootstrap "}
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Tester}
            heading={"Software Testing(Web)"}
            details={"Cypress, python pytest,API Testing"}
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{
            background: "var(--purple)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
