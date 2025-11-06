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

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: 'en',
        docsRouteBasePath: '/docs', // Matches your setup
        blogRouteBasePath: '/blog',
      },
    ],
  ],

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
    navbar: {
        hideOnScroll: false,
        logo: {
          alt: 'StableJack Logo',
          src: 'img/logo.png',
          width: 36,
          height: 36,
        },
        items: [
          // LEFT – DOCS
          { to: '/', label: 'StableJack | DOCS', position: 'left' },
          // BLOGS if needed
          //{ to: '/blog', label: 'BLOGS', position: 'left' },
          // RIGHT ICONS – X, Discord, Telegram (like Pharaoh's right icons)
          {
            href: 'https://twitter.com/StableJack_xyz',
            position: 'right',
            className: 'navbar-icon navbar-icon--x',
            'aria-label': 'X',
            html: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
          },
          {
            href: 'https://discord.gg/stablejack',
            position: 'right',
            className: 'navbar-icon navbar-icon--discord',
            'aria-label': 'Discord',
            html: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.036c-.073.104-.154.274-.199.523a18.07 18.07 0 0 0-5.474 0c-.045-.249-.126-.419-.199-.523a.074.074 0 0 0-.079-.036 19.791 19.791 0 0 0-4.885 1.515c-3.11 4.648-3.956 9.18-3.536 13.653 2.11 1.585 4.13 2.554 6.113 3.188.038.014.081-.026.081-.026.224-.31.424-.642.595-.993.095-.194.04-.387-.039-.552a13.68 13.68 0 0 1-1.96-9.355.072.072 0 0 1 .025-.08 13.93 13.93 0 0 1 11.93 0 .072.072 0 0 1 .025.08 13.68 13.68 0 0 1-1.96 9.355c-.079.165-.134.358-.039.552.171.351.371.683.595.993.038.014.081.026.081.026 1.983-.634 4.003-1.603 6.113-3.188.42-4.473-.426-9.005-3.536-13.653zM8.21 15.77c-1.177 0-2.137-1.072-2.137-2.39 0-1.318.96-2.39 2.137-2.39 1.19 0 2.14 1.072 2.137 2.39 0 1.318-.947 2.39-2.137 2.39zm7.58 0c-1.177 0-2.137-1.072-2.137-2.39 0-1.318.96-2.39 2.137-2.39 1.19 0 2.14 1.072 2.137 2.39 0 1.318-.947 2.39-2.137 2.39z"/></svg>`,
          },
          {
            href: 'https://t.me/stablejack',
            position: 'right',
            className: 'navbar-icon navbar-icon--telegram',
            'aria-label': 'Telegram',
            html: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.58 6.54l-9.08 3.5c-.6.23-.73.55-.3.82l2.27 1.06 1.06 3.35c.2.62.55.76.92.35l1.6-1.64 3.17 2.33c.7.38 1.2.07 1-.7l1.8-8.6c.18-.88-.3-1.3-1.04-1.07z"/></svg>`,
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
    // Remove algolia if present – local plugin handles search
  } satisfies Preset.ThemeConfig,
};

export default config;