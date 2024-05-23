import Image from "next/image";
import Link from "next/link";
import GridBackground from "./ui/gridBackground";
import GridCover from "./ui/gridCover";
import HeroTitle from "./ui/herotitle";
import Adbar from "./ui/adbar";
import Title from "./ui/titles";
import PortCard from "./ui/portfolio cards/portCards";
import CtaSections from "./ui/ctaSections";

export default function Home() {
  return (
    <div className="content w-screen min-h-screen flex flex-col">
      <div className="hero w-screen h-screen relative overflow-hidden">
        <GridBackground />
        <div className="hero-container w-full h-full flex flex-col items-center justify-center relative">
          <div className="title w-full h-auto flex flex-col items-center">
            <div className=""></div>
            <div className="title-main w-auto h-auto">
              <HeroTitle />
              <div className="cta-btns h-auto flex flex-row">
                <div className="btn w-auto h-auto border border-solid border-2 px-7 py-4">
                  <Link className="" href="./pages/portfolio">
                    <h1 className="uppercase text-30 font-bold">portfolio</h1>
                  </Link>
                </div>
                <div className="btn w-auto h-auto border border-solid border-2 px-7 py-4">
                  <Link className="" href="./pages/contact">
                    <h1 className="uppercase text-30 font-bold">contact</h1>
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
            <PortCard
              props={{ title: "rayyan", tags: "portfolio | video editor" }}
            />
            <PortCard
              props={{ title: "guilherme", tags: "portfolio | video editor" }}
            />
            <PortCard
              props={{ title: "item", tags: "portfolio | local business" }}
            />
            <PortCard props={{ title: "item", tags: "store | ecommerce" }} />
            <PortCard props={{ title: "item", tags: "store | ecommerce" }} />
            <PortCard props={{ title: "item", tags: "store | ecommerce" }} />
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
        <div className="services-container w-full min-h-screen flex flex-col"></div>
      </div>
    </div>
  );
}
