import Image from "next/image";
import Link from "next/link";
import "./contact.css";
import GridBackground from "../../ui/gridBackground";
import Adbar from "@/app/ui/adbar";
import HeroTitle from "@/app/ui/herotitle";
import ContactGrid from "@/app/ui/contact grid/contactGrid";
import Footer from "@/app/ui/footer/footer";

export default function Portfolio() {
  return (
    <div className="content w-screen min-h-screen flex flex-col">
      <div className="hero w-screen h-screen relative overflow-hidden">
        <GridBackground />
        <div className="hero-container w-full h-full flex flex-col items-center justify-center relative">
          <div className="title w-full h-auto flex flex-col items-center">
            <div className="title-main w-full h-auto">
              <HeroTitle title="contact me" />
              <span className="sub-title block w-full h-auto text-35 text-white uppercase">
                good to see you making the right choice
              </span>
            </div>
          </div>
          <div className="bottom w-screen h-auto absolute bottom-0">
            <Adbar />
          </div>
        </div>
      </div>
      <div className="contact-content w-screen min-h-screen">
        <div className="contact-form w-full h-screen flex items-center justify-center">
          <ContactGrid />
        </div>
      </div>
      <Footer />
    </div>
  );
}
