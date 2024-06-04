"use client";

import React from "react";
import "./heroPhotos.css";
import Image from "next/image";

interface PhotoProps {
  file: string;
  imageNo: number;
}

export function PhotoItem({ file, imageNo }: PhotoProps) {
  return (
    <div
      className={`photo photo-${imageNo} w-auto h-auto aspect-square rounded-10px absolute`}
    >
      <Image
        src={`${file}.png`}
        alt="Carter Designer Photo"
        width={150}
        height={150}
      />
    </div>
  );
}

export default function HeroPhotos() {
  return (
    <div className="photos w-auto h-auto">
      <div className="photos-container w-auto h-auto relative"></div>
    </div>
  );
}
