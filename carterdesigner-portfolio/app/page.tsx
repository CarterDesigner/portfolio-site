import Image from "next/image";
import Link from "next/link";
import GridBackground from "./ui/gridBackground";
import GridCover from "./ui/gridCover";
import HeroTitle from "./ui/herotitle";
import Adbar from "./ui/adbar";

export default function Home() {
  return (
    <div className="content w-screen min-h-screen flex flex-col">
      <div className="hero w-screen h-screen relative">
        <GridBackground />
        <div className="hero-container w-full h-full flex flex-col items-center justify-center relative">
          <div className="title w-full h-auto flex flex-col items-center">
            <div className=""></div>
            <div className="title-main w-auto h-auto">
              <HeroTitle />
            </div>
          </div>
          <div className="bottom w-screen h-auto absolute bottom-0">
            <Adbar />
          </div>
        </div>
      </div>
      <div className="portfolio w-screen min-h-screen relative">
        <GridCover />
        <div className="portfolio-container w-full h-full flex flex-col relative"></div>
      </div>
    </div>
  );
}
