import React from "react";
import ebook from "../components/ebook.jpg";
export default function BookInfo() {
  return (
    <div className="book_info">
      <div className="info_cont">
        <div className="info">
          <h1>Perfect Landing Page Template to Present Your eBook</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            saepe, recusandae quidem nulla! Eveniet explicabo perferendis aut,
            ab quos omnis labore laboriosam quisquam hic deserunt ipsum maxime
            aspernatur velit impedit.
          </p>
          <button>Download Now!</button>
          <span>*Avaliable in PDF, ePUB, Mobi & Kindle.</span>
        </div>
        <div className="ebook">
          <img src={ebook} alt="" />
        </div>
      </div>
    </div>
  );
}
