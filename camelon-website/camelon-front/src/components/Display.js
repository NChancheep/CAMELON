import React from "react";
import Overview from "./Modes/Overview";
import Pinmap from "./Modes/Pinmap";
import Heatmap from "./Modes/Heatmap";
import Aboutus from "./Modes/aboutus";

export default function Display(props) {
  if (props.data == "overview") {
    return <Overview />;
  } else if (props.data == "pin_map") {
    return <Pinmap />;
  } else if (props.data == "heat_map") {
    return <Heatmap />;
  } else if (props.data == "aboutus") {
    return <Aboutus />;
  }
}
