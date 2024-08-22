/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brandDark: "#276678",
        brandGrayDark: "#1687A7",
        brandGray: "#D3E0EA",
        brandLight: "#F6F5F5",
      },
    },
  },
  plugins: [typography],
};
