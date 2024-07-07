import React from "react";
import styles from "./home.module.css";
import GridBackground from "./ui/grid background/page";

export default function Home() {
  return (
    <div className="page">
      <div className="page-content paddingBox">
        <div className="content">
          <div className={`${styles.hero} w-full`}>
            <div className={`${styles.heroContents} w-full h-full`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
