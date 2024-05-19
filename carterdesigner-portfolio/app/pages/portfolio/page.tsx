import Image from "next/image";
import Link from "next/link";
import GridBackground from "../../ui/gridBackground";

export default function Portfolio() {
  return (
    <div className="content w-screen min-h-screen">
      <div className="background w-full h-full">
        <GridBackground />
      </div>
      <h1 className="text-white">portfolio</h1>
    </div>
  );
}
