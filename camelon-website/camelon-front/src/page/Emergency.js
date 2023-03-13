import React from "react";
import Sidebar2 from "../components/Sidebar2";
import Emercontroller from "../components/controller/emerController";


function Emergency() {
  return (
    <main>
      <div id="outer-container">
        <Sidebar2
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
      </div>
      <Emercontroller />
    </main>
  );
}

export default Emergency;
