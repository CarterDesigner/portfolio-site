"use client";

import Image from "next/image";
import Link from "next/link";
import GridBackground from "./ui/gridBackground";
import GridCover from "./ui/gridCover";
import HeroTitle from "./ui/herotitle";
import Adbar from "./ui/adbar";
import Title from "./ui/titles";
import PortCard from "./ui/portfolio cards/portCards";
import CtaSections from "./ui/ctaSections";
import LightningIcon from "./ui/lightningIcon";
import SkillsGrid from "./ui/skills grid/skillsGrid";
import { textFromLeftScript } from "./scripts/textAnimations";
import { textFromRightScript } from "./scripts/textAnimations";
import { textFromBottomScript } from "./scripts/textAnimations";
import { useEffect, ReactNode } from "react";
import Footer from "./ui/footer/footer";
import HeroPhotos from "./ui/hero photos/heroPhotos";

interface ListItemProps {
  children: ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ children }) => {
  useEffect(() => {
    textFromLeftScript();
    const handleScrollResize = () => {
      textFromLeftScript();
    };
    window.addEventListener("scroll", handleScrollResize);
    window.addEventListener("resize", handleScrollResize);
    return () => {
      window.removeEventListener("scroll", handleScrollResize);
      window.removeEventListener("resize", handleScrollResize);
    };
  }, []);
  return (
    <div className="list-item w-auto h-10 flex flex-row flex-nowrap items-center px-2 text-left">
      <LightningIcon />
      <span className="uppercase text-white text-18 whitespace-nowrap">
        {children}
      </span>
    </div>
  );
};

export default function Home() {
  return (
    <div className="content w-screen min-h-screen flex flex-col">
      <div className="hero w-screen h-screen relative overflow-hidden">
        <GridBackground />
        <div className="hero-container w-full h-full flex flex-col items-center justify-center relative">
          <div className="title w-full h-auto flex flex-col items-center">
            <div className="title-main w-auto h-auto">
              <HeroTitle title="Carter Designer" />
              <div className="cta-btns h-auto flex flex-row">
                <div className="btn w-auto h-auto border border-solid border-2 px-7 py-4">
                  <Link className="" href="./pages/portfolio">
                    <h1 className="uppercase text-30 font-bold text-center">
                      portfolio
                    </h1>
                  </Link>
                </div>
                <div className="btn w-auto h-auto border border-solid border-2 px-7 py-4">
                  <Link className="" href="./pages/contact">
                    <h1 className="uppercase text-30 font-bold text-center">
                      contact
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom w-screen h-auto absolute bottom-0">
            <Adbar />
          </div>
        </div>
      </div>
      <div className="portfolio grid-cover-container w-screen min-h-screen relative overflow-hidden">
        <GridCover />
        <div className="portfolio-container w-full min-h-screen flex flex-col items-center justify-center relative">
          <div className="title w-auto h-auto flex justify-center">
            <Title title="portfolio" />
          </div>
          <div className="port-content w-full h-auto flex-col items-center">
            <Link href="pages/portfolio" className="w-full">
              <PortCard title="rayyan" tags="portfolio | video editor" />
            </Link>
            <Link href="pages/portfolio" className="w-full">
              <PortCard title="guilherme" tags="portfolio | video editor" />
            </Link>
            <Link href="pages/portfolio" className="w-full">
              <PortCard title="coming soon" tags="" />
            </Link>
            <Link href="pages/portfolio" className="w-full">
              <PortCard title="coming soon" tags="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="cta-section w-screen min-h-screen">
        <div className="cta-section-container w-full min-h-screen flex flex-col items-center justify-center">
          <div className="title w-full h-auto flex justify-center my-5">
            <Title title="websites are essential" />
          </div>
          <CtaSections title="cta1" />
          <div className="cta-btn w-auto h-auto my-10">
            <Link href="./pages/contact" className="no-underline relative">
              <h1 className="text-white text-25 uppercase px-3 py-2 border border-solid border-2 relative font-bold">
                i want more clients
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="services w-screen min-h-screen">
        <div className="services-container w-full min-h-screen flex flex-col align-items-center justify-center">
          <div className="title w-full h-auto flex justify-center">
            <Title title="what i can do" />
          </div>
          <div className="services-content w-full h-auto flex">
            <div className="service-list w-full h-auto flex flex-col">
              <h2 className="text-20 uppercase text-white underline">
                Web Development
              </h2>
              <ListItem>fully customised website</ListItem>
              <ListItem>Portfolios | Landing Pages</ListItem>
              <ListItem>Animations | 3D Models | Responsive Layouts</ListItem>
              <ListItem>
                <strong>and more!</strong>
              </ListItem>
            </div>
            <SkillsGrid />
          </div>
        </div>
      </div>
      <div className="cta-section w-screen min-h-screen">
        <div className="cta-section-container w-full min-h-screen flex flex-col items-center justify-center">
          <div className="title w-full h-auto flex justify-center my-5">
            <Title title="personalise your website" />
          </div>
          <CtaSections title="cta2" />
          <div className="cta-btn w-auto h-auto my-10">
            <Link href="./pages/contact" className="no-underline relative">
              <h1 className="text-white text-25 uppercase px-3 py-2 border border-solid border-2 relative font-bold">
                personalise your website
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
