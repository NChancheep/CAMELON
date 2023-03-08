import React from "react";
import images from "../assets/logo1.png";


export default function Heading() {
  return (
    <div>
      <h1 style={{ display: "inline" }}>Overview |</h1>
      <img
        src={images}
        width="35"
        alt="Camelon"
        style={{ display: "inline", marginLeft: 20, marginBottom: 13 }}
      />
    </div>
  );
}
