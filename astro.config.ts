import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import { loadEnv } from "vite";

const env = loadEnv(import.meta.env.MODE, process.cwd(), "");

export default defineConfig({
	adapter: node({
		mode: "standalone",
	}),
	base: env.PUBLIC_APP_BASE_PATH,
	integrations: [
		icon({
			/** @see https://www.astroicon.dev/reference/configuration/#include */
			include: {
				lucide: ["chevron-down", "menu", "search", "x"],
			},
		}),
		/** Only needed to make the astro jsx runtime work correctly. */
		mdx(),
		/**
		 * @see https://docs.astro.build/en/guides/integrations-guide/solid-js/#combining-multiple-jsx-frameworks
		 * @see https://github.com/Thinkmill/keystatic/discussions/951
		 */
		react({
			include: ["**/content/**", "**/keystatic/**"],
		}),
		sitemap(),
	],
	prefetch: {
		defaultStrategy: "hover",
		prefetchAll: true,
	},
	redirects: {
		"/admin": {
			destination: env.PUBLIC_APP_BASE_PATH
				? `${env.PUBLIC_APP_BASE_PATH.replace(/\/$/, "")}/keystatic`
				: "/keystatic",
			status: 307,
		},
	},
	scopedStyleStrategy: "where",
	server: {
		/** Required by keystatic. */
		host: "127.0.0.1",
		port: 3000,
	},
	site: env.PUBLIC_APP_BASE_URL,
});
