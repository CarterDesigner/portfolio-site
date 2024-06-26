"use client";

import { useEffect } from "react";

function AdbarContent() {
  return (
    <div className="adbar-content h-full w-full absolute flex flex-row gap-x-20px">
      <div className="adbar-title h-full flex items-center justify-center">
        <h1 className="uppercase text-white text-50 whitespace-nowrap">
          website design
        </h1>
      </div>
      <h1 className="divider uppercase text-white text-50 transform translate-y-10px">
        |
      </h1>
      <div className="adbar-title h-full flex items-center justify-center">
        <h1 className="uppercase text-white text-50 whitespace-nowrap">
          follow
        </h1>
      </div>
      <div className="adbar-title h-full flex items-center justify-center">
        <h1 className="uppercase text-white text-50 whitespace-nowrap">
          @BCarterDesigner
        </h1>
      </div>
      <div className="adbar-title h-full flex items-center justify-center">
        <h1 className="uppercase text-white text-50 whitespace-nowrap">
          100% custom
        </h1>
      </div>
    </div>
  );
}
export default function Adbar() {
  return (
    <div className="adbar w-screen h-100px flex items-center justify-center relative">
      <AdbarContent />
      <AdbarContent />
    </div>
  );
}
