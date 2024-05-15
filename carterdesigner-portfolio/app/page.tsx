import Image from "next/image";
import Link from "next/link";
import Navigation from "./ui/navigation";
import GridBackground from "./ui/gridBackground";

export default function Home() {

  return (
    <div className="content w-screen min-h-screen flex flex-col">
      <div className="hero w-screen h-screen relative">
        <GridBackground />
        <div className="hero-container w-full h-full flex flex-col items-center justify-center">
          <div className="title w-full h-auto flex flex-col items-center">
            <div className="">

            </div>
            <div className="title-main w-auto h-auto">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
