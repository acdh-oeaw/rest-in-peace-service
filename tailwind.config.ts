import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/@(components|config|layouts|lib|pages|styles)/**/*.@(astro|css|ts|tsx)"],
	plugins: [typographyPlugin],
	theme: {
		extend: {
			colors: {
				"brand-dark": "#276678",
				"brand-gray-dark": "#1687A7",
				"brand-gray": "#D3E0EA",
				"brand-light": "#F6F5F5",
			},
		},
	},
};

export default config;
