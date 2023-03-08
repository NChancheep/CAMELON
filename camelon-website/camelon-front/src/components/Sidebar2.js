import React from "react";
import { slide as Menu } from "react-burger-menu";
import images from "../assets/logo1.png";
import { AiFillHome } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


export default function Sidebar2() {
  return (
    <Menu>
      <h1  style={{ fontSize: 24, fontWeight: 800 }}>
        <img
          src={images}
          width="51"
          alt="Camelon"
          style={{ display: "inline", paddingRight: 8 }}
        />
        Camelon
      </h1>
      <div style={{ flex: 1, height: "1px", backgroundColor: "black" }} />

      <Link className="menu-item" style={{ display: "inline" }} to="/">
        <AiFillHome style={{ display: "inline", marginRight: 6 }} />
        Home
      </Link>
      <br />
      <br />

      <Link className="menu-item" style={{ display: "inline" }} to="/Emergency">
        <AiFillInfoCircle style={{ display: "inline", marginRight: 6 }} />
        Emergency
      </Link>
      <br />
      <br />
      <Link className="menu-item" style={{ display: "inline" }} to="/contactus">
        <img
          src={images}
          width="15"
          alt="Camelon"
          style={{ display: "inline", marginRight: 6 }}
        />{" "}
        About Camelon
      </Link>
    </Menu>
  );
}
