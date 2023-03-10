import React from "react";
import Sidebar2 from "./Sidebar2";
import Emercontroller from "./emerController";


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
