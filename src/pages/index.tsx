import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Link } from 'react-router-dom'; // For internal links
import type { SiteConfig } from '@docusaurus/types'; // Import for typing
import styles from './index.module.css'; // We'll create this for custom styles

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext() as { siteConfig: SiteConfig };
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Wisdom of the Jack, Power of the AI">
      <main className={styles.hero}>
        <img
          src="/img/hero-image.png" // Pixelated neon Greek king head
          alt="Greek King Statue Head"
          className={styles.rotatingImage}
        />
        <h1 className={styles.slogan}>{siteConfig.tagline}</h1>
        <Link to="/docs/intro" className={styles.launchButton}>
          Launch Docs
        </Link>
      </main>
    </Layout>
  );
};

export default Home;