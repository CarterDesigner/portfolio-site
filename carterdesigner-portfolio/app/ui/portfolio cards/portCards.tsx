"use client";

import React, { Children } from "react";
import "./portCards.css";

interface PortCardProps {
  title: string;
  tags: string;
}

const PortCard: React.FC<PortCardProps> = ({ title, tags }) => {
  return (
    <div
      className={`${title} portfolio-card w-full h-auto flex flex-col items-center justify-center border border-white border-2 px-5 cursor-pointer`}
    >
      <div className={`title w-full h-auto flex items-center px-5`}>
        <h1 className="uppercase text-white text-40 underline">{title}</h1>
        <span className="tags uppercase text-white text-25">{tags}</span>
      </div>
    </div>
  );
};

export default PortCard;
