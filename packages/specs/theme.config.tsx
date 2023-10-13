import React from "react";
import { Logo } from "./components/Logo";
import { DocsThemeConfig } from "nextra-theme-docs";
import { PageHead } from "./components/PageHead";

const description = `"Specs for Namada, a Proof-of-Stake L1 for interchain asset-agnostic privacy.`;

const config: DocsThemeConfig = {
  primaryHue: 180,
  useNextSeoProps() {
    return {
      titleTemplate: "Namada Specs - %s",
      defaultDescription: description,
      canonical: "https://specs.namada.net",
      description,
    };
  },
  head: <PageHead />,
  logo: <Logo />,
  project: {
    link: "https://github.com/anoma/namada",
  },
  chat: {
    link: "https://discord.gg/namada",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  docsRepositoryBase:
    "https://github.com/anoma/namada-docs/blob/master/packages/specs",
  footer: {
    text: "Namada",
  },
};

export default config;
