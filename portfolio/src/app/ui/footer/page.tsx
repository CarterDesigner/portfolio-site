"use client";

import React from "react";
import "./footer.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/logo.png";

export default function Footer() {
  return (
    <div className="footer w-screen h-auto">
      <div className="footer-containerTop w-full h-full flex">
        <div className="logo flex items-center justify-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="Carter Designer Logo"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div className="links grid">
          <div className="link">
            <Link href="/" className="w-full flex justify-center text-center">
              <span className="text-white text-15 uppercase">home</span>
            </Link>
          </div>
          <div className="link">
            <Link
              href="../../pages/about"
              className="flex justify-center text-center"
            >
              <span className=" text-white text-15 uppercase">about</span>
            </Link>
          </div>
          <div className="link">
            <Link
              href="../../pages/portfolio"
              className="flex justify-center text-center"
            >
              <span className="text-white text-15 uppercase">portfolio</span>
            </Link>
          </div>
          <div className="link">
            <Link
              href="../../pages/contact"
              className="flex justify-center text-center"
            >
              <span className="text-white text-15 uppercase">contact</span>
            </Link>
          </div>
          <div className="link">
            <Link
              href="https://github.com/CarterDesigner"
              className="flex justify-center"
              target="_blank"
            >
              <span className="text-white text-15 uppercase">GitHub</span>
            </Link>
          </div>
          <div className="link">
            <Link
              href="https://www.instagram.com/bcarterdesigner"
              className="flex justify-center"
              target="_blank"
            >
              <span className="text-white text-15 uppercase">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-containerBottom w-full h-auto border-solid border-1">
        <span className="uppercase text-white text-15">
          &#169; Carter Designer 2024
        </span>
      </div>
    </div>
  );
}
