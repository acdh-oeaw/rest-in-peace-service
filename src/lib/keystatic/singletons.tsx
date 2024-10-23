/* @jsxImportSource react */

import { createSingleton } from "@acdh-oeaw/keystatic-lib";
import { fields, singleton } from "@keystatic/core";

import * as validation from "@/lib/keystatic/validation";

export const createIndexPage = createSingleton("/index-page/", (paths) => {
	return singleton({
		label: "Home page",
		path: paths.contentPath,
		format: { data: "json" },
		entryLayout: "form",
		schema: {
			hero: fields.object(
				{
					title: fields.text({
						label: "Title",
						validation: { isRequired: true },
					}),
					lead: fields.text({
						label: "Lead",
						validation: { isRequired: true },
						multiline: true,
					}),
				},
				{
					label: "Hero section",
				},
			),
		},
	});
});

export const createMetadata = createSingleton("/metadata/", (paths) => {
	return singleton({
		label: "Metadata",
		path: paths.contentPath,
		format: { data: "json" },
		entryLayout: "form",
		schema: {
			title: fields.text({
				label: "Title",
				validation: { isRequired: true },
			}),
			description: fields.text({
				label: "Description",
				validation: { isRequired: true },
			}),
			twitter: fields.object(
				{
					creator: fields.text({
						label: "Creator",
						validation: { isRequired: true, pattern: validation.twitter },
					}),
					site: fields.text({
						label: "Site",
						validation: { isRequired: true, pattern: validation.twitter },
					}),
				},
				{
					label: "Twitter",
				},
			),
			manifest: fields.object(
				{
					name: fields.text({
						label: "Name",
						validation: { isRequired: true },
					}),
					"short-name": fields.text({
						label: "Short name",
						validation: { isRequired: true },
					}),
					description: fields.text({
						label: "Description",
						validation: { isRequired: true },
					}),
				},
				{
					label: "Webmanifest",
				},
			),
		},
	});
});
