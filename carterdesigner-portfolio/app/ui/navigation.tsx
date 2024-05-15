'use client';

import "../hamburgers.css";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";

function Dropbtn() {
    return (
        <div className="drop-btn w-auto h-full items-center">
            <div className="hamburger hamburger--spin">
                <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                </div>
            </div>
        </div>
    );
}
function Navbtns() {
    return (
        <div className="navbtns w-auto h-full flex-row items-center gap-10">
            <div className="link w-auto h-auto">
                <Link href="/pages/about" className="w-auto h-auto no-underline">
                    <span className="uppercase relative">about</span>
                </Link>
            </div>
            <div className="link w-auto h-auto">
                <Link href="/pages/portfolio" className="w-auto h-auto no-underline">
                    <span className="uppercase relative">portfolio</span>
                </Link>
            </div>
        </div>
    );
}

export default function Navigation() {
    return (
        <div className="navigation w-screen h-100px flex items-center justify-center fixed top-10 left-0 z-[5]">
            <div className="navigation-container h-full flex flex-row items-center justify-between border border-solid border-white rounded-100px px-5 py-0">
                <div className="logo h-full aspect-box flex items-center justify-center rounded-full overflow-hidden">
                    <Link href="/" className="w-full h-full">
                        <Image src={Logo} alt="Carter Designer Logo link to home page" className="logo h-full w-full" />
                    </Link>
                </div>
                <div className="nav-btns w-auto h-full flex">
                    <Dropbtn />
                    <Navbtns />
                </div>
            </div>
        </div>
    )
}