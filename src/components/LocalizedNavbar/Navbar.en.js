const enNavbar = {
  hideOnScroll: true,
  title: "Prompt X3",
  logo: {
    alt: "Prompt X3",
    src: "img/promptx3.svg",
  },
  items: [
    {
      to: "https://c9ki7hypo6.feishu.cn/docx/QzBedtBlmovn9Kx9xOtczex3nMe",
      label: "Prompt Skill",
      position: "left",
    },
    { type: "localeDropdown", position: "right" },
    {
      href: "https://github.com/fenwii/PromptX3",
      position: "right",
      className: "header-github-link",
    },
    {
      href: "https://discord.gg/FSfwFjv8HH",
      position: "right",
      className: "header-discord-link",
    },
  ],
};

module.exports = enNavbar;
