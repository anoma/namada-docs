const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
    extendMarkdown: (md) => {
      // use more markdown-it plugins!
      md.use(require("markdown-it-xxx"));
    },
  },
});

module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
};
