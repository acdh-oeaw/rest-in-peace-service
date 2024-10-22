import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
	base: "rest-in-peace-service",
	integrations: [tailwind()],
	server: {
		port: 3000,
	},
	site: "https://acdh-oeaw.github.io",
});
