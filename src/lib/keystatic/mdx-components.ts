/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Img from "@/components/content/img.astro";
import Link from "@/components/content/link.astro";
import Anchor from "@/components/link.astro";

const components = {
	a: Anchor,
	img: Img,
	Link,
};

declare global {
	type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
	return components;
}
