"use client";

import React from "react";
import "./contactGrid.css";

export default function ContactGrid() {
  return (
    <form
      className="w-full h-auto flex flex-col items-center"
      action="send_email.php"
      method="post"
    >
      <div className="contact-grid w-full h-auto flex-col items-center justify-center">
        <div className="contact-item name-item w-full h-auto flex flex-col items-start">
          <label className="text-white uppercase text-25">username</label>
          <input
            className="text-white text-20 w-full"
            type="text"
            placeholder="@username on X / Instagram"
            required
          />
        </div>
        <div className="contact-item email-item w-full h-auto flex flex-col items-start">
          <label className="text-white uppercase text-25">Email address</label>
          <input
            className="text-white text-20 w-full"
            type="text"
            placeholder="Email"
            required
          />
        </div>
        <div className="contact-item message-item w-full h-auto flex flex-col items-start">
          <label className="text-white uppercase text-25">Message</label>
          <textarea
            className="text-white text-20 w-full"
            placeholder="Message"
            required
          />
        </div>
      </div>
      <button
        className="submit-btn px-2 py-1 border-white border-solid border-2 relative"
        type="submit"
      >
        <span className="uppercase text-30 relative">submit</span>
      </button>
    </form>
  );
}
