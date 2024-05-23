"use client";

import React from "react";

export default function CtaSections({ title }) {
  const renderContent = () => {
    switch (title) {
      case "cta1":
        return (
          <div className="cta-text w-full h-auto text-center flex flex-col gap-5px">
            <span className="uppercase text-white text-20">
              a website will build trust in your clients.
            </span>
            <span className="uppercase text-white text-20">
              no one will scroll through your social media account looking for
              past work amongst other posts.
            </span>
            <span className="uppercase text-white text-20">
              websites provide ease of access to your quality work.
            </span>
          </div>
        );
      case "cta2":
        return (
          <div className="cta-text w-full h-auto text-center flex flex-col gap-5px">
            <span className="uppercase text-white text-20">
              your website needs to represent you.
            </span>
            <span className="uppercase text-white text-20">
              your work needs to be associated with you.
            </span>
            <span className="uppercase text-white text-20">
              so you need to be memorable.
            </span>
          </div>
        );
      case "cta3":
        return (
          <div className="cta-text w-full h-auto text-center flex flex-col gap-5px">
            <span className="uppercase text-white text-20">
              your website needs to be unique. your website needs to stand out.
              your website needs to be memorable.
            </span>
            <span className="uppercase text-white text-20">
              this is where i come in.
            </span>
            <span className="uppercase text-white text-20">
              i&apos;m waiting for your contact.
            </span>
          </div>
        );
    }
  };
  return renderContent();
}
