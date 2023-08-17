import React, { useState } from "react";
import Child from "./Child";
import PandaContext from "../context/pandaContext";

export default function Parent(): JSX.Element {
  const [panda, setPanda] = useState<string>("");
  return (
    <div>
      Parent
      <input
    type="text"
    placeholder="panda name"
    value={panda}
    onChange={(e) => {
     setPanda(e.target.value);
    }}
   />
      <PandaContext.Provider value={{panda, setPanda}}>
        <Child />
      </PandaContext.Provider>
    </div>
  );
}
