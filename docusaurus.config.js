// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const zhNavbar = require('./src/components/LocalizedNavbar/Navbar.zh');
const enNavbar = require('./src/components/LocalizedNavbar/Navbar.en');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tag filtering, keyword search, and one-click copy prompts",
  // tagline: '掌握ChatGPT,Claude,Midjourney,Stable Diffusion提示词技术，让提问，想象力和思辨成为第一生产力',
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.promptx3.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "fenwii", // Usually your GitHub org/user name.
  projectName: "PromptX3", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans", "en"],
    localeConfigs: {
      en: {
        htmlLang: "en-US",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "GTM-NBMFG54",
          anonymizeIP: false,
        },
      }),
    ],
  ],
  plugins: [
    [
      "ideal-image",
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true,
      }),
    ],
    "./plugins/piwik.js",
    "./plugins/instantpage.js",
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      metadata: [
        { name: "keywords", content: "prompt,ChatGPT,AI prompts，提示词" },
      ],
      navbar: getNavbar(),
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Prompt X3`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      /* announcementBar: {
        id: 'announcement_bar',
        content: getAnnouncement(),
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      }, */
    }),
};

module.exports = config;

process.env.DOCUSAURUS_CURRENT_LOCALE ??= "zh-Hans";
function getNavbar() {
  switch(process.env.DOCUSAURUS_CURRENT_LOCALE) {
    case "en": return enNavbar;
    default: return zhNavbar;
  }
}
/* function getAnnouncement() {
  switch(process.env.DOCUSAURUS_CURRENT_LOCALE) {
    case "en": return 'Announcement_en';
    default: return 'Announcement_cn';
  }
} */
