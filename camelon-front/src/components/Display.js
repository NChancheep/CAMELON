import React from "react";
import Overview from "./Modes/Overview";
import Pinmap from "./Modes/Pinmap";
import Heatmap from "./Modes/Heatmap";

export default function Display(props) {
  if (props.data == "overview") {
    return (
        <Overview />
      );
  } 
  else if(props.data == "pin_map") {
    return (
        <Pinmap />
      );
  } 
  else {
    return (
        <Heatmap />
    );
  }
     

  }

  

