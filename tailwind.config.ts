import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
	content: ["./src/@(components|layouts|lib|pages|styles)/**/*.@(astro|css|ts|tsx)"],
	plugins: [typographyPlugin],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "2rem",
			},
			screens: {
				"2xl": "90rem",
			},
		},
		screens: {
			sm: "40rem",
			md: "48rem",
			lg: "64rem",
			xl: "80rem",
			"2xl": "96rem",
		},
		extend: {
			colors: {
				neutral: colors.slate,
			},
			typography: {},
		},
	},
};

export default config;
