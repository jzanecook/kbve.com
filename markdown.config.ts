//?     [MarkDown]  ->  [Configuration]

//*     [Plugins]   ->  [Table of Contents]
import remarkToc from "remark-toc";
import rehypeToc from "rehype-toc";

//!     Removal of the core plugins.
//!     import rehypeSlug from "rehype-slug";   There is a bug with displaying the Table of Contents , when importing the .MD files inside of the .MDX
import { rehypeHeadingIds } from "@astrojs/markdown-remark";

export default {
	extendMarkdownConfig: true,
	remarkPlugins: [[remarkToc, { tight: true, ordered: true }]],
	rehypePlugins: [
		rehypeHeadingIds,
		[
			rehypeToc,
			{
				headings: ["h1", "h2", "h3"],
				cssClasses: {
					toc: "toc-post",
					link: "toc-link",
				},
			},
		],
		//! rehypeSlug errors
	],

	//? Shiki Configuration

	shikiConfig: {
		// https://github.com/shikijs/shiki/blob/main/docs/themes.md
		theme: "dracula",
		// https://github.com/shikijs/shiki/blob/main/docs/languages.md
		langs: [],
		wrap: true,
	},

	//? External Plugins -> True
	extendPlugins: true,
	gfm: true,
};
