// src/pages/index.tsx – FIXED (hero + continuous docs from .mdx + no crash)
import React, { useRef } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type { SiteConfig } from '@docusaurus/types';
import styles from './index.module.css';

// Import your .mdx doc as a component
import Intro from '../../docs/intro.mdx'; // Adjust path if docs folder is at root/docs

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext() as { siteConfig: SiteConfig };
  const docsRef = useRef<HTMLDivElement>(null);

  const scrollToDocs = () => {
    docsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      {/* HERO */}
      <main className={styles.hero}>
        <div className={styles.leftColumn}>
          <img src="/img/logo.png" alt="StableJack Logo" className={styles.logo} />
          <h1 className={styles.slogan}>{siteConfig.tagline}</h1>

          <div className={styles.buttonGroup}>
            <a href="https://www.stablejack.xyz/" target="_blank" rel="noopener noreferrer" className={styles.launchButton}>
              Launch App
            </a>
            <button onClick={scrollToDocs} className={styles.scrollButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <img src="/img/hero-image.png" alt="Greek King Statue Head" className={styles.rotatingImage} />
        </div>
      </main>

      {/* DOCS SECTION – render .mdx directly */}
      <section ref={docsRef} className={styles.docsSection}>
        <div className="container">
          <div className={styles.row}>
            <aside className={styles.col3}>
              {/* Manual sidebar – add links as you build */}
              <ul className={styles.sidebarList}>
                <li><a href="#intro">Introduction</a></li>
                {/* Add more sections from your .md files */}
              </ul>
            </aside>
            <main className={styles.col9}>
              <Intro />
            </main>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;