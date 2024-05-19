"use client";

import { useEffect } from "react";
import { gridBackgroundScript } from "../scripts/gridBackground";

export default function GridBackground() {
  useEffect(() => {
    gridBackgroundScript();
  }, []);
  return (
    <div className="grid-back w-screen h-screen absolute top-0 left-0">
      <div className="tiles w-full h-full grid"></div>
    </div>
  );
}
