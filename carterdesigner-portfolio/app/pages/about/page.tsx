import Image from "next/image";
import Link from "next/link";
import "./about.css";
import GridBackground from "../../ui/gridBackground";
import Adbar from "@/app/ui/adbar";
import Title from "@/app/ui/titles";
import HeroTitle from "@/app/ui/herotitle";
import Footer from "@/app/ui/footer/footer";

export default function Portfolio() {
  return (
    <div className="content w-screen min-h-screen flex flex-col">
      <div className="hero w-screen h-screen relative overflow-hidden">
        <GridBackground />
        <div className="hero-container w-full h-full flex flex-col items-center justify-center relative">
          <div className="title w-full h-auto flex flex-col items-center">
            <div className="title-main w-auto h-auto">
              <HeroTitle title="about me" />
              <span className="w-auto h-auto text-35 text-white uppercase">
                A guide to me?
              </span>
            </div>
          </div>
          <div className="bottom w-screen h-auto absolute bottom-0">
            <Adbar />
          </div>
        </div>
      </div>
      <div className="about-content w-screen min-h-screen"></div>
      <Footer />
    </div>
  );
}
