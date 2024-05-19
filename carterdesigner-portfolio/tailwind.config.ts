import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "70": "70%",
      },
      height: {
        "100px": "100px",
        "98": "98%",
      },
      top: {
        "10": "10px",
      },
      left: {
        "0": "0",
      },
      borderRadius: {
        "100px": "100px",
      },
      aspectRatio: {
        box: "1",
      },
      paddingX: {
        "15": "15px",
      },
      fontSize: {
        "50": "50px",
      },
      gap: {
        "20px": "20px",
      },
      translate: {
        "10px": "10px",
      },
      animationDelay: {
        "5s": "5s",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
