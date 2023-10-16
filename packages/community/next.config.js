const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  defaultShowCopyCode: true,
});

module.exports = {
  ...withNextra(),
  basePath: "/community/docs",
  images: {
    unoptimized: true,
  },
};
