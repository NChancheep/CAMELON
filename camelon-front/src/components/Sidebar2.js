import React from "react";
import { slide as Menu } from "react-burger-menu";
import images from "../assets/logo1.png";
import { AiFillHome } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";

export default function Sidebar2() {
  return (
    <Menu>
      <h1 className="" style={{ fontSize: 24, fontWeight: 800 }}>
        <img
          src={images}
          width="51"
          alt="Camelon"
          style={{ display: "inline", paddingRight: 8 }}
        />
        Camelon
      </h1>
      <div style={{ flex: 1, height: "1px", backgroundColor: "black" }} />
      <a className="menu-item" href="/Overview">
        <AiFillHome style={{ display: "inline", marginRight: 6 }} />
        Overview
      </a>
      <a className="menu-item" href="/Emergency-Infomatio">
        <AiFillInfoCircle style={{ display: "inline", marginRight: 6 }} />{" "}
        Emergency Infomation
      </a>
      <a className="menu-item" href="/About-Camelon">
        <img
          src={images}
          width="15"
          alt="Camelon"
          style={{ display: "inline", marginRight: 6 }}
        />
        About Camelon
      </a>
    </Menu>
  );
}
