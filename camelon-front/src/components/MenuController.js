import React, { useState } from "react";
import Display from "./Display";


export default function MenuController() {

 const [state, setState] = useState({mode:"aboutus"})
  
  return (
    <>
        <div class="p-4 sm:ml-64">
        <div class="p-4">
          <div class="grid grid-cols-3 gap-4 mb-4">
            <button onClick={() => setState({mode:"overview"})} class="flex items-center justify-center bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 border border-black rounded h-24" >
              <div class="text-xl">Overview</div>
            </button>
            <button onClick={() => setState({mode:"pin_map"})} class="flex items-center justify-center bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 border border-black rounded h-24">
              <div class="text-xl">Map</div>
            </button>
            <button onClick={() => setState({mode:"heat_map"})} class="flex items-center justify-center bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 border border-black rounded h-24">
              <div class="text-xl">Heat Map</div>
            </button>
          </div>
        </div>
      </div>
      <div > 
      <Display data={state.mode}/>
      </div>
    </>
  );
}
