"use client";

import React, { Children } from "react";
import "./portCards.css";

export default function PortCard({ props }) {
  return (
    <div
      className={`${props.title} portfolio-card w-full h-auto flex flex-col items-center justify-center border border-white border-2 px-5 cursor-pointer`}
    >
      <div className={`title w-full h-auto flex items-center px-5`}>
        <h1 className="uppercase text-white text-40 underline">
          {props.title}
        </h1>
        <span className="tags uppercase text-white text-25">{props.tags}</span>
      </div>
    </div>
  );
}
