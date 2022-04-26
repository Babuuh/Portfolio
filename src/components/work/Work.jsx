import React from "react";
import "./Work.css";
import Upwork from "../../images/Upwork.png";
import Fiverr from "../../images/fiverr.png";
import Facebook from "../../images/Facebook.png";
import Amazon from "../../images/amazon.png";
import Shopify from "../../images/Shopify.png";

function Work() {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works for all These</span>
        <span>Brands and Clients</span>
        <span>
          Over the years I have acquired and perfected
          <br />
          various Skills and Technologies
        </span>
        <a href="/" alt="">
          <button className="button s-button">Hire Me</button>
        </a>
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
