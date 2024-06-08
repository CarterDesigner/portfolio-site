"use client";

import React from "react";
import Image from "next/image";
import styles from "./heroPhotos.module.css";
import Logo from "../../../public/logo.png";

interface PhotoProps {
  file: string;
  imageNo: number;
  photoStyles: string;
}

function PhotoItem({ file, imageNo, photoStyles }: PhotoProps) {
  return (
    <div
      className={`photo photo-${imageNo} w-auto h-auto aspect-square rounded-10px absolute ${styles.portCard} overflow-hidden`}
    >
      <Image
        src={Logo}
        alt="Carter Designer Photo"
        width={175}
        height={175}
        className={photoStyles}
        draggable="false"
      />
    </div>
  );
}

export default function HeroPhotos() {
  return (
    <div className={`photos w-auto h-auto ${styles.photos} absolute right-0`}>
      <div className="photos-container w-500px h-auto relative flex justify-center items-center">
        <PhotoItem file="logo" imageNo={1} photoStyles={styles.photoStyles} />
        <PhotoItem file="logo" imageNo={2} photoStyles={styles.photoStyles} />
        <PhotoItem file="logo" imageNo={3} photoStyles={styles.photoStyles} />
      </div>
    </div>
  );
}
