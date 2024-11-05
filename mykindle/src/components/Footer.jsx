import React from "react";
import facebookPic from "../components/imgs/facebook-rounded-svgrepo-com.svg";
import twitter from "../components/imgs/twitter-rounded-svgrepo-com.svg";
import google from "../components/imgs/google-plus-svgrepo-com.svg";
import linked from "../components/imgs/linkedin-svgrepo-com.svg";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_social">
        <img src={facebookPic} alt="" />
        <img src={twitter} alt="" />
        <img src={google} alt="" />
        <img src={linked} alt="" />
      </div>
      <p>
        &copy; Copyright <strong>Markups.</strong> All rights reserved.
      </p>
    </div>
  );
}
