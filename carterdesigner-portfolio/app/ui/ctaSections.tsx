"use client";

import React from "react";
import { useEffect } from "react";
import { textFromBottomScript } from "../scripts/textAnimations";

interface CtaSectionProps {
  title: string;
}

const CtaSections: React.FC<CtaSectionProps> = ({ title }) => {
  useEffect(() => {
    textFromBottomScript();
    const handleScrollOrResize = () => {
      textFromBottomScript();
    };
    window.addEventListener("scroll", handleScrollOrResize);
    window.addEventListener("resize", handleScrollOrResize);
    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, []);
  const renderContent = () => {
    switch (title) {
      case "cta1":
        return (
          <div className="cta-text w-full h-auto text-center flex flex-col gap-5px">
            <span className="uppercase text-white text-20 text-bottom">
              Why do you need a website? You tell me.
            </span>
            <span className="uppercase text-white text-20 text-bottom">
              If you&#39;re trying to sell something who will people trust more?
            </span>
            <br />
            <span className="uppercase text-white text-20 text-bottom">
              The mofo without a website?
              <br />
              Or the guy with a website showing their value and abilities off as
              well as solidifying their brand?
            </span>
            <br />
            <span className="uppercase text-white text-20 text-bottom">
              Now tell me, who&#39;s going to be pulling more clients and
              securing more sales?
            </span>
          </div>
        );
      case "cta2":
        return (
          <div className="cta-text w-full h-auto text-center flex flex-col gap-5px">
            <span className="uppercase text-white text-20 text-bottom">
              Do you want a generic website?
              <br />
              Or do you want to stand out?
            </span>
            <br />
            <span className="uppercase text-white text-20 text-bottom">
              Do you want to be eaily memorable to people?
            </span>
            <br />
            <span className="uppercase text-white text-20 text-bottom">
              Emphasise your brand and value to people through your website.
            </span>
          </div>
        );
      case "cta3":
        return (
          <div className="cta-text w-full h-auto text-center flex flex-col gap-5px">
            <span className="uppercase text-white text-20">
              your website needs to be unique. your website needs to stand out.
              your website needs to be memorable.
            </span>
            <span className="uppercase text-white text-20">
              this is where i come in.
            </span>
            <span className="uppercase text-white text-20">
              i&apos;m waiting for your contact.
            </span>
          </div>
        );
    }
  };
  return renderContent();
};

export default CtaSections;
