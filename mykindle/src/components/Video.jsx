import React from "react";

export default function Video() {
  return (
    <div className="vid_cont">
      <h1>Check Out Our Video Review</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      Lorem Ipsum has been the industry's standard dummy text ever
      </p>
      <iframe
  width="40%"
  height="400"
  src="https://www.youtube.com/embed/T4ySAlBt2Ug"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

    </div>
  );
}
