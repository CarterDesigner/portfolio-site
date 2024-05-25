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
        "min-content": "min-content",
        "70px": "70px",
        "150px": "150px",
      },
      height: {
        "100px": "100px",
        "98": "98%",
        "70px": "70px",
      },
      top: {
        "1/2": "50%",
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
      padding: {
        "10": "10%",
      },
      paddingX: {
        "10": "10px",
        "15": "15px",
        "20": "20px",
        "10P": "10%",
      },
      fontSize: {
        "18": "18px",
        "20": "20px",
        "25": "25px",
        "30": "30px",
        "35": "35px",
        "40": "40px",
        "50": "50px",
        "55": "55px",
      },
      gap: {
        "5px": "5px",
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
