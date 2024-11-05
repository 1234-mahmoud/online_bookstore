import React from "react";
import Author_image from "../components/imgs/author.jpg";
import signture from "../components/imgs/author-signature.png";
import facebook from "../components/imgs/facebook-rounded-svgrepo-com.svg";
import twitter from "../components/imgs/twitter-rounded-svgrepo-com.svg";
import linked from "../components/imgs/linkedin-svgrepo-com.svg";
import google from "../components/imgs/google-plus-svgrepo-com.svg";
export default function Author() {
  return (
    <div className="Author_info">
      <h1>About The Author</h1>
      <div className="Author">
        <div className="Author_image">
          <img src={Author_image} alt="" />
        </div>
        <div className="Author_data">
          <h2>John Doe</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            suscipit facilis ipsum ullam reiciendis odio error iste neque
            ratione libero rem accusamus voluptatibus, nihil unde maiores sunt
            nisi. Assumenda, consectetur
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate,
            dolorem error neque! Dolores similique ut iusto odit esse ipsam,
            nesciunt pariatur animi minima maiores mollitia cupiditate ad ipsum
            deleniti perspiciatis!
          </p>
          <img src={signture} alt="" />
          <div className="social">
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={twitter} alt="" />
            </a>
            <a href="">
              <img src={linked} alt="" />
            </a>
            <a href="">
              <img src={google} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
