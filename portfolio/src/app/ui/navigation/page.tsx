"use client";

import React, { ReactNode, useEffect } from "react";
import styles from "./navigation.module.css";
import "../../hamburger.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/logo.png";

interface navBtnProps {
  linkPath: string;
  children: ReactNode;
}

function Btn({ linkPath, children }: navBtnProps) {
  return (
    <div className={`${styles.navBtn} h-ful`}>
      <Link href={linkPath}>
        <span className="uppercase">{children}</span>
      </Link>
    </div>
  );
}

export default function Navigation() {
  return (
    <div className={`${styles.navigation} navigation w-screen`}>
      <div className="nav-container w-full h-full flex flex-row paddingBox justify-between items-center">
        <div className={`${styles.logo} w-auto h-full`}>
          <Link href="/" className="w-auto h-full flex flex-row items-center">
            <div className={`${styles.logoImg} h-full aspect-square`}>
              <Image
                src={Logo}
                alt="Carter Designer logo home button"
                height={100}
                width={100}
              />
            </div>
            <div className={`${styles.logoText} h-full items-center`}>
              <span>CarterDesigner</span>
            </div>
          </Link>
        </div>
        <div className={`${styles.navBtns} w-auto h-full`}>
          <Btn linkPath="/about">about</Btn>
          <Btn linkPath="/portfolio">portfolio</Btn>
          <Btn linkPath="/contact">contact</Btn>
        </div>
      </div>
    </div>
  );
}
