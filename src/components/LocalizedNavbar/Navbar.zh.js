const zhNavbar = {
  hideOnScroll: true,
  title: "Prompt X3",
  logo: {
    alt: "Prompt X3",
    src: "img/promptx3.svg",
  },
  items: [
    {
      to: "https://c9ki7hypo6.feishu.cn/docx/QzBedtBlmovn9Kx9xOtczex3nMe",
      label: "Prompt提示词技术",
      position: "left",
    },
    {
      type: 'dropdown',
      label: '其他工具',
      position: 'left',
      items: [
        {
          label: "Aix3人工智能导航",
          href: "https://aix3.tools",
        },
        {
          label: 'aigcGPT机器人',
          href: 'https://www.aigcgpt.app',
        },
        {
          label: 'aigcgpt Ai私人助理',
          href: 'https://web.aigcgpt.app',
        },

      ],
    },
    {
      to: "https://c9ki7hypo6.feishu.cn/docx/D0JFdbjoUoMthCxd311c0v4Snng",
      label: "反馈建议",
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

module.exports = zhNavbar;
