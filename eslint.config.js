import baseConfig from "@acdh-oeaw/eslint-config";
import astroConfig from "@acdh-oeaw/eslint-config-astro";
import playwrightConfig from "@acdh-oeaw/eslint-config-playwright";
import reactConfig from "@acdh-oeaw/eslint-config-react";
import tailwindcssConfig from "@acdh-oeaw/eslint-config-tailwindcss";
import { defineConfig } from "eslint/config";
import gitignore from "eslint-config-flat-gitignore";

const reactFiles = [
	"keystatic.config.@(ts|tsx)",
	"**/content/**/*.@(ts|tsx)",
	"**/keystatic/**/*.@(ts|tsx)",
];

const config = defineConfig(
	gitignore({ strict: false }),
	baseConfig,
	{
		extends: [astroConfig],
		ignores: reactFiles,
	},
	{
		extends: [reactConfig],
		files: reactFiles,
	},
	// @ts-expect-error It's fine.
	tailwindcssConfig,
	playwrightConfig,
	{
		rules: {
			"arrow-body-style": ["error", "always"],
			"prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
		},
	},
	{
		files: reactFiles,
		rules: {
			"react/jsx-sort-props": ["error", { reservedFirst: true }],
		},
	},
);

export default config;
