/* @jsxImportSource react */

import {
	createAssetOptions,
	createCollection,
	createContentFieldOptions,
} from "@acdh-oeaw/keystatic-lib";
import { collection, fields } from "@keystatic/core";

export const createTombstones = createCollection("/tombstones/", (paths) => {
	return collection({
		label: "Tombstones",
		path: paths.contentPath,
		format: { contentField: "content" },
		slugField: "title",
		columns: ["title"],
		entryLayout: "form",
		schema: {
			title: fields.slug({
				name: {
					label: "Title",
					validation: { isRequired: true },
				},
			}),
			shortTitle: fields.text({
				label: "Short title",
				validation: { isRequired: false },
			}),
			publicationDate: fields.date({
				label: "Publication date",
				validation: { isRequired: true },
				defaultValue: { kind: "today" },
			}),
			url: fields.url({
				label: "URL",
				validation: { isRequired: true },
			}),
			repo: fields.url({
				label: "Git repository",
				validation: { isRequired: false },
			}),
			deprecationDate: fields.date({
				label: "Deprecation date",
				validation: { isRequired: true },
			}),
			image: fields.image({
				label: "Image",
				validation: { isRequired: false },
				...createAssetOptions(paths.assetPath),
			}),
			matomoId: fields.number({
				label: "Matomo ID",
				validation: { isRequired: false },
			}),
			content: fields.mdx({
				label: "Content",
				options: createContentFieldOptions(paths.assetPath),
				components: {},
			}),
		},
	});
});
