// sidebars.ts
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/questionnaire',
      ],
    },
    {
      type: 'category',
      label: 'Alpha',
      collapsed: false,
      items: [
        'alpha/index',
        'alpha/finding-alpha',
        'alpha/trading-setups',
        'alpha/thesis-exit-plan',
      ],
    },
    {
      type: 'category',
  label: 'Navigator',
      collapsed: false,
      items: [
        'navigator/index',
        'navigator/strategy-builder',
        'navigator/portfolio-management',
        'navigator/indicator-tracker',
        'navigator/chat',
      ],
    },
    {
      type: 'category',
      label: 'Trading',
      collapsed: false,
      items: [
        'trading/index',
        'trading/take-profit-stop-loss',
        'trading/margining',
        'trading/funding-rate',
        'trading/liquidation',
        'trading/entry-pnl',
        'trading/order-types',
        'trading/fees',
      ],
    },
    {
      type: 'category',
      label: 'Subscription',
      collapsed: false,
      items: ['subscription/index', 'subscription/plans'],
    },
    'points-program',
    'referral-affiliate',
    'faq',
    'risks',
    'brand-kit',
  ],
};

export default sidebars;