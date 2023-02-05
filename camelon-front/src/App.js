import MenuController from "./components/MenuController";
import React from "react";
import "./css/Sidebar.css";
import Sidebar2 from "./components/Sidebar2";

// ...
function App() {
  return (
    <main>
      <div className="App" id="outer-container">
        <Sidebar2
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
      </div>
      <MenuController />
    </main>
  );
}

export default App;
