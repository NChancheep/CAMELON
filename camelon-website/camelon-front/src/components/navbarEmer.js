import React from "react";
import Gambling from "./Modes/Gambling";
// import  from ;
// import  from ;
// import  from ;

export default function NavbarEmer(props) {
  if (props.data === "Gambling") {
    return <Gambling/>;
  } 
  else if (props.data === "Murder") {
    return <props />;
  } 
  else if (props.data === "SexualAbuse") {
    return <props />;
  } 
  else if (props.data === "TheftBurglary") {
    return < props/>;
  }
  else if (props.data === "BatteryAssault") {
    return < props/>;
  }
  else if (props.data === "Drug") {
    return <props />;
  }
  else if (props.data === "Accident") {
    return < props/>;
  }
}
