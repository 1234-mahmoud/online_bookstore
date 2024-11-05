import React from "react";
import cup from "../components/imgs/cup-1-svgrepo-com.svg";
import chapter from "../components/imgs/doc-on-doc-svgrepo-com.svg";
import page from "../components/imgs/doc11-text-svgrepo-com.svg";
import readers from "../components/imgs/person-team-svgrepo-com.svg";
export default function Statistics() {
  const info = [
    {
      id: 1,
      num: 650,
      title: "Total Pages",
      img: page,
    },
    {
      id: 2,
      num: 422,
      title: "Chapters",
      img: chapter,
    },
    {
      id: 3,
      num: 3,
      title: "Got Awards",
      img: cup,
    },
    {
      id: 4,
      num: 1055,
      title: "Active Readers",
      img: readers,
    },
  ];
  return (
    <div className="stats_content">
      {info.map((i) => (
        <div className="statstics" key={i.id}>
          <div className="icon">
            <img src={i.img} alt="" />
          </div>
          <span className="num">{i.num}</span>
          <span className="title">{i.title}</span>
        </div>
      ))}
    </div>
  );
}
