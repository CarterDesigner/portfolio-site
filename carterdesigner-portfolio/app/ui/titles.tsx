"use client";

import React, { useEffect, ReactNode } from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = (props) => {
  return <h1 className="uppercase text-white text-30 text-center">{props.title}</h1>;
};

export default Title;
