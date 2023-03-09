import React, { useState } from "react";


import { useSelector } from "react-redux";


export default function ChoroplethMap() {

  const { thailandGeoJson } = useSelector((state) => state.data);
  console.log(thailandGeoJson)

  return (
    <div class="sm" style={{ marginTop: 16 }}>
      <div class="text-xl">Hey, this is ChoroplethMap</div>
    </div>
  );
}
