import React from "react";
import { Logo } from "./components/Logo";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  primaryHue: 180,
  useNextSeoProps() {
    return {
      titleTemplate: "Namada Documentation - %s",
    };
  },
  logo: <Logo />,
  project: {
    link: "https://github.com/anoma/namada",
  },
  chat: {
    link: "https://discord.gg/jdZwNvxS",
  },
  docsRepositoryBase: "https://github.com/anoma/namada-docs/blob/master/packages/docs",
  footer: {
    text: "Namada",
  },
};

export default config;
