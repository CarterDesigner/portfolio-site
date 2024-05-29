"use client";

import React from "react";
import "./skillsGrid.css";
import Image from "next/image";
import { useEffect } from "react";
import { skillImagesScript } from "../../scripts/skillImages";

interface SkillItemProps {
  title: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ title }) => {
  useEffect(() => {
    skillImagesScript();
    const handleScrollResize = () => {
      skillImagesScript();
    };
    window.addEventListener("scroll", handleScrollResize);
    window.addEventListener("resize", handleScrollResize);
    return () => {
      window.removeEventListener("scroll", handleScrollResize);
      window.removeEventListener("resize", handleScrollResize);
    };
  }, []);
  return (
    <div
      className={`grid-item w-full h-auto flex items-center justify-center item item-${title}`}
    >
      <div
        className={`skill ${title} skill-image w-auto h-auto flex items-center justify-center px-2 py-2 cursor-pointer`}
      >
        <Image
          src={`/${title}.png`}
          alt={`Skill: ${title}`}
          width={70}
          height={70}
        />
      </div>
    </div>
  );
};

export default function SkillsGrid() {
  return (
    <div className="skills-grid w-auto h-auto grid mt-5">
      <SkillItem title="html" />
      <SkillItem title="react" />
      <SkillItem title="next" />
      <SkillItem title="typescript" />
      <SkillItem title="tailwind" />
      <SkillItem title="emotion" />
      <SkillItem title="stripe" />
    </div>
  );
}
