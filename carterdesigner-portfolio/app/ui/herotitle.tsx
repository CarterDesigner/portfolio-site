"use client";
import React from "react";

export default function HeroTitle() {
  return (
    <div className="hero-title w-screen h-auto my-5 mx-0">
      <div className="title-line w-min-content h-auto flex items-center justify-center">
        <h1 className="text-white uppercase text-55 whitespace-nowrap select-none">
          Carter Designer
        </h1>
      </div>
      <div className="title-line w-auto h-auto">
        <span className="uppercase text-white text-25"></span>
      </div>
    </div>
  );
}
