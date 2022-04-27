import React from "react";
import "./Footer.css";
import Wave from "../../images/wave.png";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Kiharajoseph72@gmail.com</span>
        <div className="f-icons">
          <Linkedin color="white" size="3rem" />
          <Github color="white" size="3rem" />
          <Twitter color="white" size="3rem" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
