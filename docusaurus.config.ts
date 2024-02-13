import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "HTS Blog",
  tagline: "HTS Blog",
  favicon: "img/favicon.ico",
  url: "https://jasonhts0817.github.io",
  baseUrl: "/hts-blog",
  projectName: "hts-blog",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "zh-TW",
    locales: ["zh-TW"],
  },
  markdown: {
    mermaid: true,
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          blogSidebarTitle: "文章清單",
          routeBasePath: "/",
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: "HTS Blog",
        src: "img/logo.png",
        srcDark: "img/logo-dark.png",
      },
      items: [
        {
          href: "https://github.com/Jasonhts0817",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} HTS.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  themes: ["@docusaurus/theme-mermaid"],
};

export default config;
