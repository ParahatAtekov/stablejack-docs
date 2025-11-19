// src/pages/index.tsx — FINAL: Organized categories + seamless hero → docs
import React, { useRef, useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './index.module.css';

// Import all your .mdx files (keep adding as you create more)
import Intro from '../../docs/intro.mdx';
import GettingStarted from '../../docs/getting-started/index.mdx';
import Questionnaire from '../../docs/getting-started/questionnaire.mdx';
import Alpha from '../../docs/alpha/index.mdx';
import FindingAlpha from '../../docs/alpha/finding-alpha.mdx';
import TradingSetups from '../../docs/alpha/trading-setups.mdx';
import ThesisExit from '../../docs/alpha/thesis-exit-plan.mdx';
import Navigator from '../../docs/navigator/index.mdx';
import StrategyBuilder from '../../docs/navigator/strategy-builder.mdx';
import PortfolioMgmt from '../../docs/navigator/portfolio-management.mdx';
import IndicatorTracker from '../../docs/navigator/indicator-tracker.mdx';
import Chat from '../../docs/navigator/chat.mdx';
import Trading from '../../docs/trading/index.mdx';
import TakeProfit from '../../docs/trading/take-profit-stop-loss.mdx';
import Margining from '../../docs/trading/margining.mdx';
import FundingRate from '../../docs/trading/funding-rate.mdx';
import Liquidation from '../../docs/trading/liquidation.mdx';
import EntryPnL from '../../docs/trading/entry-pnl.mdx';
import OrderTypes from '../../docs/trading/order-types.mdx';
import Fees from '../../docs/trading/fees.mdx';
import Subscription from '../../docs/subscription/index.mdx';
import Plans from '../../docs/subscription/plans.mdx';
import Points from '../../docs/points-program.mdx';
import Referral from '../../docs/referral-affiliate.mdx';
import FAQ from '../../docs/faq.mdx';
import Risks from '../../docs/risks.mdx';
import BrandKit from '../../docs/brand-kit.mdx';

const sections = [
  { id: 'intro', title: 'Introduction', component: Intro },
  { id: 'getting-started', title: 'Getting Started', component: GettingStarted },
  { id: 'questionnaire', title: 'User Questionnaire', component: Questionnaire },
  { id: 'alpha', title: 'Alpha', component: Alpha },
  { id: 'finding-alpha', title: 'Finding Alpha', component: FindingAlpha },
  { id: 'trading-setups', title: 'Trading Setups', component: TradingSetups },
  { id: 'thesis-exit', title: 'Thesis & Exit Plan', component: ThesisExit },
  { id: 'navigator', title: 'Navigator', component: Navigator },
  { id: 'strategy-builder', title: 'Strategy Builder', component: StrategyBuilder },
  { id: 'portfolio', title: 'Portfolio Management', component: PortfolioMgmt },
  { id: 'indicator-tracker', title: 'Indicator Tracker', component: IndicatorTracker },
  { id: 'chat', title: 'AI Chat', component: Chat },
  { id: 'trading', title: 'Trading', component: Trading },
  { id: 'take-profit', title: 'Take Profit / Stop Loss', component: TakeProfit },
  { id: 'margining', title: 'Margining', component: Margining },
  { id: 'funding-rate', title: 'Funding Rate', component: FundingRate },
  { id: 'liquidation', title: 'Liquidation', component: Liquidation },
  { id: 'entry-pnl', title: 'Entry Price & PnL', component: EntryPnL },
  { id: 'order-types', title: 'Order Types', component: OrderTypes },
  { id: 'fees', title: 'Fees', component: Fees },
  { id: 'subscription', title: 'Subscription', component: Subscription },
  { id: 'plans', title: 'Subscription Plans', component: Plans },
  { id: 'points', title: 'Points Program', component: Points },
  { id: 'referral', title: 'Referral & Affiliate', component: Referral },
  { id: 'faq', title: 'FAQ', component: FAQ },
  { id: 'risks', title: 'Risks', component: Risks },
  { id: 'brand-kit', title: 'Brand Kit', component: BrandKit },
];

const sidebarGroups = [
  { label: 'Introduction', items: ['intro'] },
  { label: 'Getting Started', items: ['getting-started', 'questionnaire'] },
  { label: 'Alpha', items: ['alpha', 'finding-alpha', 'trading-setups', 'thesis-exit'] },
  { label: 'Navigator', items: ['navigator', 'strategy-builder', 'portfolio', 'indicator-tracker', 'chat'] },
  { label: 'Trading', items: ['trading', 'take-profit', 'margining', 'funding-rate', 'liquidation', 'entry-pnl', 'order-types', 'fees'] },
  { label: 'Subscription & Points', items: ['subscription', 'plans', 'points'] },
  { label: 'Community & More', items: ['referral', 'faq', 'risks', 'brand-kit'] },
];

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const [activeSection, setActiveSection] = useState('intro');
  const [openGroups, setOpenGroups] = useState(sidebarGroups.map(group => group.label));
  const docsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -70% 0%' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleGroup = (label: string) => {
    setOpenGroups(prev => prev.includes(label) ? prev.filter(g => g !== label) : [...prev, label]);
  };

  const scrollToDocs = () => {
    document.getElementById('getting-started')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <div className={styles.pageWrapper}>
        {/* HERO */}
        <main className={styles.hero}>
          <div className={styles.leftColumn}>
            <img src="/img/logo.png" alt="StableJack" className={styles.logo} />
            <h1 className={styles.slogan}>{siteConfig.tagline}</h1>
            <div className={styles.buttonGroup}>
              <a href="https://www.stablejack.xyz" target="_blank" rel="noopener noreferrer" className={styles.launchButton}>
                Launch App
              </a>
              <button onClick={scrollToDocs} className={styles.scrollButton}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <img src="/img/hero-image.png" alt="King" className={styles.rotatingImage} />
          </div>
        </main>

        {/* SINGLE-PAGE DOCS */}
        <section ref={docsRef} className={styles.docsSection}>
          <div className="container">
            <div className="row">
              {/* Pharaoh-style organized sidebar */}
              <aside className="col col--3">
                <div className={styles.sidebar}>
                  <h3 className={styles.sidebarTitle}>Docs</h3>
                  {sidebarGroups.map(group => (
                    <div key={group.label} className={styles.group}>
                      <div onClick={() => toggleGroup(group.label)} className={styles.groupHeader}>
                        <svg className={clsx(styles.arrow, openGroups.includes(group.label) && styles.arrowOpen)} viewBox="0 0 24 24">
                          <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                        </svg>
                        {group.label}
                      </div>
                      {openGroups.includes(group.label) && (
                        <ul className={styles.groupList}>
                          {group.items.map(id => {
                            const section = sections.find(s => s.id === id);
                            return (
                              <li key={id}>
                                <a
                                  href={`#${id}`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(id);
                                  }}
                                  className={clsx(styles.sidebarLink, activeSection === id && styles.active)}
                                >
                                  {section.title}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </aside>

              {/* Main Content */}
              <main className="col col--9">
                <div className={styles.content}>
                  {sections.map(({ id, component: Component }) => (
                    <section key={id} id={id} className={styles.section}>
                      <Component />
                      {id !== 'brand-kit' && <div className={styles.divider} />}
                    </section>
                  ))}
                </div>
              </main>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;