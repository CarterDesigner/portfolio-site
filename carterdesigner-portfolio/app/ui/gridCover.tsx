"use client";

import { useEffect } from "react";
import { gridCoverScript } from "../scripts/gridCover";

export default function GridCover() {
  useEffect(() => {
    gridCoverScript();
  }, []);
  return (
    <div className="grid-cover w-full h-full absolute top-0 left-0 pointer-events-none">
      <div className="tiles w-full h-full grid"></div>
    </div>
  );
}
