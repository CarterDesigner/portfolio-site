"use client";

import React, { useState } from "react";
import "./contactGrid.css";

export default function ContactGrid() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    if (result.success) {
      setStatus("Email sent successfully!");
    } else {
      setStatus("Failed to send email.");
    }
  };
  return (
    <form
      className="w-full h-auto flex flex-col items-center"
      onSubmit={handleSubmit}
    >
      <div className="contact-grid w-full h-auto flex-col items-center justify-center">
        <div className="contact-item name-item w-full h-auto flex flex-col items-start">
          <label className="text-white uppercase text-25">username</label>
          <input
            className="text-white text-20 w-full"
            type="text"
            placeholder="@username on X / Instagram"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-item email-item w-full h-auto flex flex-col items-start">
          <label className="text-white uppercase text-25">Email address</label>
          <input
            className="text-white text-20 w-full"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-item message-item w-full h-auto flex flex-col items-start">
          <label className="text-white uppercase text-25">Message</label>
          <textarea
            className="text-white text-20 w-full"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
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
      {status && <p>{status}</p>}
    </form>
  );
}
