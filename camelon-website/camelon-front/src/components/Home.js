import MenuController from "./MenuController";
import React from "react";
import "../css/Sidebar.css";
import Sidebar2 from "./Sidebar2";

function Home() {
  return (
    <main>
      <div id="outer-container">
        <Sidebar2
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
      </div>
      <MenuController />
    </main>
  );
}

export default Home;