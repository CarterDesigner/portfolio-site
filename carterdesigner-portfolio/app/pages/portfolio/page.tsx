"use client";

import Image from "next/image";
import Link from "next/link";
import "./portfolio.css";
import GridBackground from "../../ui/gridBackground";
import HeroTitle from "@/app/ui/herotitle";
import Adbar from "@/app/ui/adbar";
import PortCard from "@/app/ui/portfolio cards/portCards";
import { textFromBottomScript } from "@/app/scripts/textAnimations";
import { textFromRightScript } from "@/app/scripts/textAnimations";
import { textFromLeftScript } from "@/app/scripts/textAnimations";
import Footer from "@/app/ui/footer/footer";
import { useEffect, useRef } from "react";

export default function Portfolio() {
  useEffect(() => {
    textFromBottomScript();
    textFromLeftScript();
    textFromRightScript();
  }, []);
  return (
    <div className="content w-screen min-h-screen flex flex-col">
      <div className="hero w-screen h-screen relative overflow-hidden">
        <GridBackground />
        <div className="hero-container w-full h-full flex flex-col items-center justify-center relative">
          <div className="title w-full h-auto flex flex-col items-center">
            <div className="title-main w-full h-auto">
              <HeroTitle title="portfolio" />
              <span className="sub-title w-full block h-auto text-35 text-white uppercase">
                A catalogue of my projects
              </span>
            </div>
          </div>
          <div className="bottom w-screen h-auto absolute bottom-0">
            <Adbar />
          </div>
        </div>
      </div>
      <div className="portfolio-content w-screen min-h-screen">
        <div className="portfolio-grid w-full h-auto flex-col items-center justify-center">
          <div className="text-left">
            <PortCard title="rayyan" tags="portfolio | video editor" />
          </div>
          <div className="text-right">
            <PortCard title="guilherme" tags="portfolio | video editor" />
          </div>
          <div className="text-left">
            <PortCard title="coming soon" tags="" />
          </div>
          <div className="text-right">
            <PortCard title="coming soon" tags="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
