"use client";
import React from "react";

export default function HeroTitle({ title }) {
  return (
    <div className="hero-title w-screen h-auto my-5 mx-0">
      <div className="title-line w-min-content h-auto flex items-center justify-center">
        <h1 className="text-white uppercase text-55 whitespace-nowrap select-none">
          {title}
        </h1>
      </div>
    </div>
  );
}
