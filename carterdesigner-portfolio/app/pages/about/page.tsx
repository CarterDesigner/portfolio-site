"use client";

import Image from "next/image";
import Link from "next/link";
import "./about.css";
import GridBackground from "../../ui/gridBackground";
import Adbar from "@/app/ui/adbar";
import Title from "@/app/ui/titles";
import HeroTitle from "@/app/ui/herotitle";
import Footer from "@/app/ui/footer/footer";
import { textFromBottomScript } from "@/app/scripts/textAnimations";
import { textFromLeftScript } from "@/app/scripts/textAnimations";
import { textFromRightScript } from "@/app/scripts/textAnimations";
import { useEffect } from "react";
import EmotionCSS from "../../../public/emotion.png";
import HTML from "../../../public/html.png";
import Next from "../../../public/next.png";
import ReactPNG from "../../../public/react.png";
import Stripe from "../../../public/stripe.png";
import TailwindPNG from "../../../public/tailwind.png";
import TypescriptPNG from "../../../public/typescript.png";

export default function Portfolio() {
  useEffect(() => {
    textFromBottomScript();
    textFromLeftScript();
    textFromRightScript();
    const handleScrollResize = () => {
      textFromBottomScript();
      textFromLeftScript();
      textFromRightScript();
    };
    window.addEventListener("scroll", handleScrollResize);
    window.addEventListener("resize", handleScrollResize);
    return () => {
      window.removeEventListener("scroll", handleScrollResize);
      window.removeEventListener("resize", handleScrollResize);
    };
  }, []);
  return (
    <div className="content w-screen min-h-screen flex flex-col">
      <div className="hero w-screen h-screen relative overflow-hidden">
        <GridBackground />
        <div className="hero-container w-full h-full flex flex-col items-center justify-center relative">
          <div className="title w-full h-auto flex flex-col items-center">
            <div className="title-main w-full h-auto">
              <HeroTitle title="about me" />
              <span className="sub-title block w-full h-auto text-35 text-white uppercase">
                A guide to me?
              </span>
            </div>
          </div>
          <div className="bottom w-screen h-auto absolute bottom-0">
            <Adbar />
          </div>
        </div>
      </div>
      <div className="about-content w-screen min-h-screen">
        <div className="me-section w-full h-screen flex items-center justify-center">
          <div className="me-content w-full h-full flex flex-col items-center justify-center">
            <div className="title w-full h-auto flex justify-center">
              <h1 className="uppercase text-30 text-white underline">
                who am i?
              </h1>
            </div>
            <div className="me-points w-full h-auto">
              <ul className="points flex flex-col gap-5">
                <li className="text-white text-25 text-bottom text-center">
                  My name is Ben Carter and I am from the "colourful" country of
                  England.
                </li>
                <li className="text-white text-25 text-bottom text-center">
                  I am a web designer starting to delve into the realms of
                  fullstack development.
                </li>
                <li className="text-white text-25 text-bottom text-center">
                  I like to explore creative ways to present content on a
                  website, whether that's through animations; transitions etc. I
                  will find a way.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="skills-section w-full h-auto flex items-center justify-center">
          <div className="skill-content w-full h-full flex flex-col items-center justify-center pb-30px">
            <div className="title w-full h-auto flex justify-center">
              <h1 className="uppercase text-white text-30">what can i do?</h1>
            </div>
            <div className="skills-list w-full h-auto">
              <ul className="list w-full h-auto flex flex-col items-center gap-5">
                <li className="w-full flex flex-row items-center justify-center text-white text-25">
                  <div className="image w-30 h-auto flex justify-end text-left">
                    <Image
                      src={EmotionCSS}
                      alt="emotion css logo"
                      width={75}
                      height={75}
                    />
                  </div>
                  <div className="text w-70 h-auto flex flex-col items-start text-right">
                    <h1>Emotion CSS</h1>
                    <span className="whitespace-nowrap">
                      Emotion CSS is a library used for witing css styles in
                      JavaScript.
                    </span>
                  </div>
                </li>
                <li className="w-full flex flex-row items-center justify-center text-white text-25">
                  <div className="image w-30 h-auto flex justify-end text-left">
                    <Image src={HTML} alt="html logo" width={75} height={75} />
                  </div>
                  <div className="text w-70 h-auto flex flex-col items-start text-right">
                    <h1>HTML</h1>
                    <span className="whitespace-nowrap">
                      HTML is the markup language used to create webpages.
                    </span>
                  </div>
                </li>
                <li className="w-full flex flex-row items-center justify-center text-white text-25">
                  <div className="image w-30 h-auto flex justify-end text-left">
                    <Image
                      src={Next}
                      alt="Nextjs logo"
                      width={75}
                      height={75}
                    />
                  </div>
                  <div className="text w-70 h-auto flex flex-col items-start text-right">
                    <h1>Next.js</h1>
                    <span className="whitespace-nowrap">
                      Next.js is a react framework for building web apps.
                    </span>
                  </div>
                </li>
                <li className="w-full flex flex-row items-center justify-center text-white text-25">
                  <div className="image w-30 h-auto flex justify-end text-left">
                    <Image
                      src={ReactPNG}
                      alt="Nextjs logo"
                      width={75}
                      height={75}
                    />
                  </div>
                  <div className="text w-70 h-auto flex flex-col items-start text-right">
                    <h1>React</h1>
                    <span className="whitespace-nowrap">
                      React is a JavaScript library for building user interfaces
                      (UI).
                    </span>
                  </div>
                </li>
                <li className="w-full flex flex-row items-center justify-center text-white text-25">
                  <div className="image w-30 h-auto flex justify-end text-left">
                    <Image
                      src={Stripe}
                      alt="Nextjs logo"
                      width={75}
                      height={75}
                    />
                  </div>
                  <div className="text w-70 h-auto flex flex-col items-start text-right">
                    <h1>Stripe</h1>
                    <span className="whitespace-nowrap">
                      Stripe is a payment processing platform.
                    </span>
                  </div>
                </li>
                <li className="w-full flex flex-row items-center justify-center text-white text-25">
                  <div className="image w-30 h-auto flex justify-end text-left">
                    <Image
                      src={TailwindPNG}
                      alt="Nextjs logo"
                      width={75}
                      height={75}
                    />
                  </div>
                  <div className="text w-70 h-auto flex flex-col items-start text-right">
                    <h1>Tailwind CSS</h1>
                    <span className="whitespace-nowrap">
                      Tailwind is a CSS framework/library of classes.
                    </span>
                  </div>
                </li>
                <li className="w-full flex flex-row items-center justify-center text-white text-25">
                  <div className="image w-30 h-auto flex justify-end text-left">
                    <Image
                      src={TypescriptPNG}
                      alt="Nextjs logo"
                      width={75}
                      height={75}
                    />
                  </div>
                  <div className="text w-70 h-auto flex flex-col items-start text-right">
                    <h1>Typescript</h1>
                    <span className="whitespace-nowrap">
                      Typescript is a JavaScript type-checking language.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
