import React from "react";
import Gambling from "./Modes/Gambling";
import Murder from "./Modes/Murder";
import SexualAbuse from "./Modes/SexualAbuse";
import TheftBurglary from "./Modes/TheftBurglary";
import BatteryAssault from "./Modes/BatteryAssault";
import Drug from "./Modes/Drug";
import Accident from "./Modes/Accident";
import Overview from "./Modes/EmeOverview";

export default function NavbarEmer(props) {
  if (props.data === "Overview") {
    return <Overview/>;
  } 
  else if (props.data === "Gambling") {
    return <Gambling/>;
  } 
  else if (props.data === "Murder") {
    return <Murder />;
  } 
  else if (props.data === "SexualAbuse") {
    return <SexualAbuse />;
  } 
  else if (props.data === "TheftBurglary") {
    return <TheftBurglary />;
  }
  else if (props.data === "BatteryAssault") {
    return <BatteryAssault />;
  }
  else if (props.data === "Drug") {
    return <Drug />;
  }
  else if (props.data === "Accident") {
    return <Accident />;
  }
}
