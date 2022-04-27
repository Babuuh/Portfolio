import React, {useContext} from "react";
import "./Work.css";
import Upwork from "../../images/Upwork.png";
import Fiverr from "../../images/fiverr.png";
import Facebook from "../../images/Facebook.png";
import Amazon from "../../images/amazon.png";
import Shopify from "../../images/Shopify.png";
import { themeContext } from "../../Context";
import {Link} from 'react-scroll'

const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="Work">
      <div className="awesome">
      <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
        <span>Brands and Clients</span>
        <span>
          Over the years I have acquired and perfected
          <br />
          various Skills and Technologies
        </span>
        <Link to="contact-form" smooth={true} spy={true}>
          <button className="button s-button">Hire Me</button>
        </Link>
        <div
          className="blur s-blur1"
          style={{
            background: "abf1ff94",
          }}
        ></div>
      </div>

      {/* right side */}
      <div className="w-right">
          <div className="w-maincircle">
              <div className="w-secCircle">
                  <img src={Upwork} alt="" />
              </div>
              <div className="w-secCircle">
                  <img src={Facebook} alt="" />
              </div>
              <div className="w-secCircle">
                  <img src={Amazon} alt="" />
              </div>
              <div className="w-secCircle">
                  <img src={Fiverr} alt="" />
              </div>
              <div className="w-secCircle">
                  <img src={Shopify} alt="" />
              </div>
          </div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Work;
