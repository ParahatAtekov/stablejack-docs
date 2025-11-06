// docusaurus.config.ts
import { themes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const githubTheme = themes.github;
const draculaTheme = themes.dracula;

const config: Config = {
  title: 'StableJack',
  tagline: 'Wisdom of the Jack, Power of the AI',
  favicon: 'img/favicon.ico',

  // Replace with your actual deployment URL
  url: 'https://your-domain.com',
  baseUrl: '/',

  organizationName: 'stablejack',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/your-repo/stablejack-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/your-repo/stablejack-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/stablejack-social-card.jpg',
    navbar: {
      title: 'StableJack',
      logo: {
        alt: 'StableJack Logo',
        src: 'img/logo.png', // minimalist line-art Zeus head
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/ai-agent', label: 'AI Agent', position: 'right' },
        {
          href: 'https://github.com/your-repo/stablejack-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} StableJack`,
    },
    prism: {
      theme: githubTheme,
      darkTheme: draculaTheme,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;