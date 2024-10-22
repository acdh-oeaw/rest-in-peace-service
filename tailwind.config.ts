import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/@(components|config|layouts|lib|pages|styles)/**/*.@(astro|css|ts|tsx)"],
	plugins: [typographyPlugin],
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
};

export default config;
